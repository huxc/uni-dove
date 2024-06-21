/**
 * 常用正则自行扩展
 */

// password 密码验证（至少包含一个大写字母、一个小写字母和一个数字，长度至少为8位）
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// chinese 中文验证
export const chineseRegex = /^[\u4E00-\u9FA5]+$/

// number 数字验证（包括整数和小数，支持负数）
export const numberRegex = /^-?\d+(\.\d+)?$/

// integer 整数验证（包括正整数和负整数）
export const integerRegex = /^-?\d+$/

// positiveInteger 正整数验证
export const positiveIntegerRegex = /^[1-9]\d*$/

// nonNegativeInteger 非负整数验证（包括0和正整数）
export const nonNegativeIntegerRegex = /^\d+$/

// date 日期（yyyy-mm-dd）验证
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/

// time 时间（hh:mm:ss）验证
export const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/

// amount 金额验证（小数点后最多两位）
export const amountRegex = /^\d+(\.\d{1,2})?$/

// postalCode 邮政编码验证（中国大陆）
export const postalCodeRegex = /^[1-9]\d{5}$/

// qq QQ号码验证
export const qqRegex = /^[1-9]\d{4,10}$/

// username 用户名验证（字母开头，允许字母、数字、下划线，4-16位）
export const usernameRegex = /^[a-z]\w{3,15}$/i

// fullName 姓名验证（中文或英文，2-20个字符）
export const fullNameRegex = /^[\u4E00-\u9FA5A-Z]{2,20}$/i

// bankCard 银行卡号验证（16或19位数字）
export const bankCardRegex = /^\d{16}|\d{19}$/

// 使用案例
// import { passwordRegex } from './path/to/regexPatterns';

// const isValidPassword = passwordRegex.test('Password123');

// console.log(isValidPassword); // true
