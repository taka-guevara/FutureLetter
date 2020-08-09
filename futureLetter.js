// main start

// 1年後のメッセージがここに入ります。
let yourFeatureLetter = "";

// 今のあなたのValueの達成度入れてみ？
let achievementOfABHAGDriven = 80;
let achievementOfIcebergMind = 80;
let achievementOfGrowingTogether = 80;

let firstMessage  = "ゲバリオンよ。POL楽しんでますか？";
let endMessage = "ま、これからも頑張るんやで。Plus Ultraやで";

yourFeatureLetter += firstMessage;
yourFeatureLetter += checkBHAGDriven(achievementOfABHAGDriven);
yourFeatureLetter += checkIcebergMind(achievementOfIcebergMind);
yourFeatureLetter += checkGrowingTogether(achievementOfGrowingTogether);

yourFeatureLetter += endMessage;
outputYourFeatureLetter(achievementOfABHAGDriven, achievementOfIcebergMind, achievementOfGrowingTogether);

// main end

// function start

function checkBHAGDriven(achievement) {
    let bHAGDrivenMessage = "BHAG Drivenの達成度は" + achievement + "か。";
    if(achievement >= 80){
        bHAGDrivenMessage 
            += "まじすごい。考えられない。理想にしているところも達成してしまうパワーを手に入れたようやな"
            + "あとは理想を広げ考え高めることが必要だと思う。と言っても一年前の自分には考えられない領域にいるんかな。自由に高みを目指すんやで。";
    } else if(achievement < 80 && achievement >= 50){
        bHAGDrivenMessage 
            += "ぼちぼち目標達成に拘って達成できるようになってきたかな。でもまだ自分の理想は達成できてないんちゃう？"
            + "もっと自分出して周りを巻き込めるような野郎になるんやで。";
    }else if(achievement < 50 && achievement >= 0){
        bHAGDrivenMessage 
            += "まだまだBHAGに取り組めていないようやな。もっとたくさんのことを行動ファーストでチャレンジせなあかん。"
            + "君は考えすぎでやらない理由を考えてしまうんやから、たまには頭空っぽにして行動する意識くらいの方がちょうどええんやで。";
    }else if(achievement < 0){
        bHAGDrivenMessage 
            += "何してんの？";
    }
    return bHAGDrivenMessage;
}

function checkIcebergMind(achievement) {
    let icebergMindMessage = "Iceberg Mindの達成度は" + achievement + "か。";
    if(achievement >= 80){
        icebergMindMessage 
            += "アイスバーグデカくなったな〜。めちゃめちゃ自信を持っていろんなことに取り組めているんやろうな。"
            + "エンジニア界隈では名が通るようになったかな。ブレーキ踏まずに周りを引っ張っていってください。";
    } else if(achievement < 80 && achievement >= 50){
        icebergMindMessage 
            += "少しは自分に自信を持って振る舞えるようになってきたかな。とはいえまだまブレーキかかってるところあるやろう。"
            + "たまに出る怠惰なところはまだまだでてくるやろうけど、受け入れつつもアクセル踏み込めるようになってください。";
    }else if(achievement < 50 && achievement >= 0){
        icebergMindMessage 
            += "ここを伸ばしていくとかいいながら全然できていないようやな。辛いかも知れんが自分子供になってるんちゃう？"
            + "気づかず他責にして何も感じないようにしてるのでは？周りのIcebergMind振り返ったり、1年前のGrowingSession思い出してみ。";
    }else if(achievement < 0){
        icebergMindMessage 
            += "何してんの？";
    }
    return icebergMindMessage;
}

function checkGrowingTogether(achievement) {
    let growingTogetherMessage = "Growing Togetherの達成度は" + achievement + "か。";
    if(achievement >= 80){
        growingTogetherMessage 
            += "めちゃめちゃステークホルダーのことを考えて成長を引っ張れている状態になったのか！"
            + "すごい！自分のことで必死だったのをこれだけ巻き込んでやれるようになっているのはなかなか考えられないわ。";
    } else if(achievement < 80 && achievement >= 50){
        growingTogetherMessage 
            += "周りを巻き込んで行動できてきているかな。君はほんと巻き込むのヘタクソというかやるという発想にも至らなかったやからすごいもんや。"
            + "でもまだまだ周りを巻き込めば、周りの成長を引っ張れると思うからまだまだ諦めずグロトゥギャするんやで！";
    }else if(achievement < 50 && achievement >= 0){
        growingTogetherMessage 
            += ""
            + "";
    }else if(achievement < 0){
        growingTogetherMessage 
            += "何してんの？";
    }
    return growingTogetherMessage;
}

function outputYourFeatureLetter(bHAG, iceberg, groToge) {
    if(bHAG  >= 80 && iceberg >= 80 && groToge >= 80){
        console.log(yourFeatureLetter);
    } else if(bHAG  >= 50  || iceberg >= 50 || groToge >= 50){
        console.warn(yourFeatureLetter);
    } else {
        console.error(yourFeatureLetter); 
    }       
}
// function end