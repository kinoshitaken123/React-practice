export default function tapleSample() {
    const response: [number, string] = [200, 'OK']
    // 一般的なダブルの型定義
    console.log("Array tuple sample 1:", response)

    // 可変長引数を使ったダブル
    const girlfriends: [string, ...string[]] = ["kana", "Miku", "Keiko"]
    girlfriends.push("Misa")
    console.log("Array tuple sample 2:", girlfriends)
}