// import World from './world';

// const root = document.getElementById('root')
// const world = new World('Hellow Torahack!!!')
// world.sayHellow(root)


// // 03.基本の型定義
// import { any, notExist, primitiveSample, unknownSample} from './basic'

// any()
// notExist()
// primitiveSample()
// unknownSample()

// 04.関数の型定義

import {logMessage} from './function/basic'
import {isUserSignedIn, isUserSignedIn2} from './function/parameters';

logMessage("Hello TypeScript!")
isUserSignedIn('ABC', 'Torahack')
isUserSignedIn('123')
isUserSignedIn2('ABC')