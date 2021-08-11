export default function objectSample() {
    const a: object ={
        name: 'yamada',
        age: 28
    }
   
 // オブジェクトリテラル記法による型定義
  let country: {
      language: string
      name: string
  } = {
     language: 'Japanese',
     name: 'Japan'
  }
  console.log('Object object sample 1:', country)

  country = {

    language: 'English',
    name: 'USA'
  }
  console.log('Object object sample 2:', country)
}
// オプショナル(?)なプロパティと読み取り専用(readonly)プロパティ
const kentaro: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
 } = {
     age: 28,
     lastName: 'Yamada',
     firstName: 'Taro'
 }

    kentaro.gender = 'male'
    kentaro.lastName = 'Kamado'
    console.log('Object object sample 3:', kentaro)
