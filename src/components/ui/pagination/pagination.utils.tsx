export const getPortion = (
  totalPages: number,
  maxCountShowBtn: number,
  minCountShowBtn: number
): number[][] => {
  const result = []
  const firstPortion = []
  const lastPortion = []
  let portion = []

  for (let i = 1; i <= totalPages; i++) {
    //create firstPortion
    if (i <= maxCountShowBtn) {
      firstPortion.push(i)
      if (i === maxCountShowBtn) {
        result.push(firstPortion)
      }
    } else {
      //create portion if i > maxCountShowBtn
      if (portion.length <= minCountShowBtn) {
        portion.push(i)
        if (portion.length === minCountShowBtn) {
          result.push([...portion])
          portion = []
        }
      }
    }
    //create lastPortion
    if (i + maxCountShowBtn > totalPages && maxCountShowBtn !== totalPages) {
      lastPortion.push(i)
      if (i === totalPages) {
        result.length > 1 ? (result[result.length - 1] = lastPortion) : result.push(lastPortion)
      }
    }
  }

  return result
}
export const getCurrentPortion = (currentPage: number, portions: number[][]) => {
  for (let i = portions.length - 1; i >= 0; i--) {
    if (portions[i].includes(currentPage)) {
      return i
    }
  }

  return -1
}
