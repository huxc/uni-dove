import process from 'node:process'
import { readFileSync } from 'node:fs'
import { basename, extname } from 'node:path'
import ts from 'typescript'
import { globSync } from 'glob'

const modules: { [key: string]: any[] } = {
  'uniapp-router-next': ['useRoute', 'useRouter'],
  '@dcloudio/uni-app': ['onError', 'onExit', 'onHide', 'onPageScroll', 'onLaunch', 'onLoad', 'onReady', 'onShow', 'onUnload'],
}
/**
 * 解析文件并提取函数名
 */
export function getAutoImport() {
  const files = globSync('./src/api/modules/*.{js,ts}')

  for (const filePath of files) {
    const fileName = basename(filePath, extname(filePath))
    const key = `@/api/modules/${fileName}`
    modules[key] = []

    const code = readFileSync(filePath, 'utf8')

    // 使用 TypeScript 的编译器 API 解析代码
    const sourceFile = ts.createSourceFile(
      filePath,
      code,
      ts.ScriptTarget.Latest,
      /* setParentNodes */ true,
    )

    // 遍历 AST 并提取函数名
    ts.forEachChild(sourceFile, (node: ts.Node) => {
      if (ts.isFunctionDeclaration(node) && node.name) {
        const functionName = node.name.getText()
        modules[key].push([functionName, `api_${fileName}_${functionName}`])
      }
      else if (ts.isVariableStatement(node)) {
        node.declarationList.declarations.forEach((declaration) => {
          if (
            ts.isIdentifier(declaration.name)
            && declaration.initializer
            && (ts.isFunctionExpression(declaration.initializer)
            || ts.isArrowFunction(declaration.initializer))
          ) {
            const functionName: string = declaration.name.getText()
            modules[key].push([
              functionName,
              `api_${fileName}_${functionName}`,
            ])
          }
        })
      }
      else if (ts.isMethodDeclaration(node) && node.name) {
        // 处理方法声明
        const functionName = node.name.getText()
        modules[key].push([functionName, `api_${fileName}_${functionName}`])
      }
    })
  }
  return modules
}
