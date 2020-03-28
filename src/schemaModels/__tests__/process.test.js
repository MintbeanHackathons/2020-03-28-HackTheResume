import { processJson } from "../process"

describe("processing the json", () => {
  it("should parse the json if valid", () => {
    const obj = {a: "b"}
    const validJSON = JSON.stringify({a: "b"})
    expect(processJson(validJSON)).toEqual(obj)
  })

  it("should throw an error if the json is invalid", () => {
    const errFn = () => processJson("{")
    expect(errFn).toThrow(Error)
  })
})