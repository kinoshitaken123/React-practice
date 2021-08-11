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