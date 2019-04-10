const deepSet = (arr: any[], selector: string) => {
  const uniqueSet = [
    ...new Set(
      arr.map((item: any) => {
        return item[selector]
      })
    )
  ]

  return uniqueSet.map(uniqueSelector => {
    return arr.filter((item: any) => {
      return item[selector] === uniqueSelector
    })[0]
  })
}

export default deepSet
