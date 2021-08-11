export default function arraySample () {
    // シンプルな配列の型定義
    const colors: string[] = ['red', 'blue']
    colors.push("yellow")
    // colors.push(123) // NG
    console.log("Array array sample 1:",colors)

    const even: Array<number> = [2,4,6]
    even.push(8)

    console.log("Array array sample 2:",even)

    const ids: (string | number)[] = ["ABC",123]
    ids.push("DEF")
    ids.push(456)

    console.log("Array array sample 3:",ids)

    // 配列の型推論
    const generateSomeArray = () => {
        const _someArray = [] 
        _someArray.push(123)
        _someArray.push("ABC")
        return _someArray
    }

    const someArray = generateSomeArray()
    someArray.push(456)

    console.log("Array array sample 4:", someArray)
}