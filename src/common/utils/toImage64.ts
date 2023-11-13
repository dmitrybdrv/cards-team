export const toImage64 = (file: File): Promise<string> => {
  return new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = function () {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(file)
  })
}
