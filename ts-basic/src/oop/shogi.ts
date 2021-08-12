type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を表すクラス
// private修飾子のついたプロパティは、Positionクラスから生まれたインスタンスのみで使用できる
class Position{
    constructor(private suji: Suji, private dan: Dan){
    }
}

//駒を表すクラス