let words = ['арсенал','спартак','интер','реал','спортинг','страсбург']
let word = words[Math.floor(Math.random()*5)]
let point = 0
live=3
let answerLen = word.length
let wordArray = []
for (let i=0; i<word.length;i++){
    wordArray[i] = '  _  '
};
while (answerLen>0){
    if (live<1){
        alert('Поражение!')
    }
    alert('Количество жизней: '+live)
    alert(wordArray)
    let letter = prompt('Введите букву. Для выхода введите 0')
    point=0
    if ((letter == 0) || (letter == null)){
        alert('Bye')
        break;
    } else if (letter.length !== 1){
        alert('введите только одну букву');
    } else{
        for (let j=0;j<=(word.length)-1;j++){
            if (letter === word[j] ){
                wordArray[j] = letter;
                answerLen--;
            }
        else{
            point+=1
            if (point == word.length){
                live-=1
            }
            
        }
        };
    }
    };
    if (answerLen<1){
        alert("ПОБЕДА");
    }
    alert('Слово '+ word )