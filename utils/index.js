export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhoneNumber = (number) => {
  const phoneRegex = /^[0-9]{10}$/
  return phoneRegex.test(number)
}
