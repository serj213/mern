import { body } from 'express-validator';

export const registerValidator = [
  body('email', 'Некорректный email').isEmail(),
  body('fullName', 'Некорректное имя').isLength({ min: 3 }),
  body('password', 'Длина пароля должна быть минимум 5 символов').isLength({ min: 5 }),
  body('avatarUrl', 'укажите ссылку на аватарку').optional().isURL(),
];
