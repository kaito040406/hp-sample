
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import styles from '../styles/revo.module.css'


const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))


const NewTest: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <div className={styles.container}>
        <div className="wapper" id="container">
        <header>
        <div className="header_box">
          <img src="https://revolve-official.com/wp-content/uploads/2021/04/Revolve-logo.png" alt="logo" className="image" alt="Re'volve 本町" />
          </div>
        </header>
      
        <div className="main">
        <section className="attention">
          <div className="upper_line"></div>
            <div className="page1_message_1">
              <h1>女性のための発毛技術<br/>自慢できる美しい髪で明るい生活を楽しめる</h1>
            </div>
            <div className="under_line"></div>
            <div className="page1_message_2">
            <span className="page1_message_2_2">医師が推奨する技術を</span><br/>
              <span className="page1_message_2_2_1">使って顧客満足度</span>
            </div>
            <span className="page1_message_2_1">98.8%</span>
            <div className="page1_message_4">
            <div className="page1_message_4_title">
                <div className="page1_message_4_title_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/45312.png" alt="こんな髪の悩みはありませんか？" className="inline_img" />
                  こんな髪の悩みはありませんか？
                </div>
            </div>
            <ol>
              <li className="page1_message_4_title_li">
                <span className="page1_message_4_title_1_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/check.png" alt="薄毛をなんとかごまかそうと髪型に苦心している" className="inline_img" />
                  薄毛をなんとかごまかそうと髪型に苦心している
                </span>
              </li>
              <li className="page1_message_4_title_li">
                <span className="page1_message_4_title_1_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/check.png" alt="明るい所や日が当たる場所で、頭皮がみえてしまう..." className="inline_img" />
                  明るい所や日が当たる場所で、頭皮がみえてしまう...
                </span>
              </li>
              <li className="page1_message_4_title_li">
                <span className="page1_message_4_title_1_2">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/check.png" alt="髪が薄くなってきたことにより自信がなくなってた" className="inline_img" />
                  髪が薄くなってきたことにより自信がなくなってた
                </span>
              </li>
              <li className="page1_message_4_title_li">
                <span className="page1_message_4_title_1_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/check.png" alt="今まで散々色々なものを色々なものを試したがどれも効かなかった" className="inline_img" />
                  今まで散々色々なものを色々なものを試したがどれも効かなかった
                </span>
              </li>
              <li className="page1_message_4_title_li">
                <span className="page1_message_4_title_1_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/check.png" alt="風が強いとすぐに髪の毛が乱れてしまう" className="inline_img" />
                風が強いとすぐに髪の毛が乱れてしまう
                </span>
              </li>
              </ol>
              <div className="page1_message_5">
              このようなお悩みをお持ちの方
              </div>
              </div>
            <div className="page1_message_6">
            <div className="page1_message_6_xxx">
              安心してください。当サロンが研究を重ね発見した
            </div>
            <br/>
            <div className="page1_message_6_yyy">
              最新の
              <span className="page1_message_6_1">育毛発毛促進技術</span>
              が登場
            </div>	  
            </div>	
        　</section>
          
          
          
        <section className="interest"> 
          <table className="page1_message_6_table">
            <tr><br/>
              <th>
              <div className="page2_message_1">
              <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-1.png" className="image"  alt="今テレビ雑誌メディアで話題"/>
              </div>
            </th>

            <th>
              <div className="page2_message_1">
              <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-2.png" className="image" alt="一度の出産で75gしか取れない貴重な臍帯血由来幹細胞培養液"/>
              </div>
            </th>

            <th>
              <div className="page2_message_1">
              <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-3.png" className="image" alt="最先端の医療ノウハウを活用し弱った細胞を再生"/>
              </div>
            </th>
            </tr>
          </table>
          
        <div className="h2_box">
            <h2>
          いま話題の再生医療にも用いられている<span className="red">ヒト幹細胞</span>を使用した<br/>業界で最先端の<span className="blue">再生発毛システム</span>
            </h2>
          </div>	 
          
        <div className="page2_message_2">
          <span>ついに最新の再生技術で<br/>
            <span className="page2_message_2_6"><br/></span>
            <span className="page2_message_2_3">髪の毛が生える時代</span>
              がやってきました！<br/><span className="page2_message_2_6"><br/></span>
          </span>
          <span className="page2_message_2_4">
          当サロンでは希少な臍帯血幹細胞の培養液を使用しており<br/><span className="page2_message_2_6"><br/></span>
          </span>
          <span className="page2_message_2_5">
            臍帯血由来幹細胞培養液
          </span>
            で発毛させます。<span className="page2_message_2_6"><br/></span>
          </div>


          <div className="page2_message_3">
            <span>
              <span className="page2_message_2_6"><br/></span>他社の幹細胞培養液は脂肪由来ですが、当施術院は<span className="red">臍帯血幹細胞由来</span>の培養液を贅沢に使用しています。<br/><span className="page2_message_2_6"><br/></span>
              <div className="baiyoueki_img_box">
                <div className="baiyoueki_img_1">
                  <img src="https://revolve-official.com/wp-content/uploads/2021/05/スクリーンショット-2021-04-29-13.48.05.png" alt="臍帯血幹細胞培養液_1" className="image" />
                </div>
              </div>
              
              <div className="saitaiketu_box">
              臍帯血幹細胞とは母親から赤ちゃんに臍帯を通じて送る<span className="blue">「身体のもと」</span>となる少量しか摂取できない幹細胞です。<br/>その<span className="red">最も希少な幹細胞</span>の培養液は脂肪由来幹細胞培養液と比較すると<span><span className="red">264倍</span>も高い濃度で<span className="blue">再生因子</span>を含有しています。</span><br/>
                  </div>
            <span className="page2_message_2_7">(この臍帯血幹細胞の培養液を使用したサロンはRe'volve提供店のみとなります)</span>
            </span>
          </div>
          </section>
          

        <section className="imagine">
          <div className="page2_message_3_title">
            <div className="page2_message_3_title_line">&nbsp;</div>
            POINT
            <div className="page2_message_3_title_line">&nbsp;</div>
          </div>


          <div className="page2_message_100">
            <div className="page2_message_3_1">
              <div className= "point-title">
                薬に依存しないLED照射で細胞自体を活性化!
              </div>
            </div>
            <div className="page2_message_3_image">
              <div className="page2_message_3_image_1">
                        <img src="https://revolve-official.com/wp-content/uploads/2021/05/5D5A0018.jpg" alt="発毛LED照射"className="image" />
              </div>
            </div>
            {/* <!-- 以下はabsolute --> */}
            <div className="page2_message_3_abusolute">
              <span >
                当サロンでは幹細胞の培養液と合わせてLED照射をおこないます。<br/>
              </span><br/>
              薬などで強制的に発毛させるのではなく、LEDとヒト幹細胞培養液とを<br/>
              組み合わせる事によって
              <span className="yellow">
                髪の毛を作る細胞事態を再生させる事で<br/>薄毛を改善させる最先端の発毛システム
              </span>
              です。
            </div>
            {/* <!-- 以上はabsolute --> */}
            <div className="led_explain">
                  ＊ LEDによる発毛は大阪大学、京都大学による研究で<span className="red">医学的</span>に証明されています。
                </div>
          </div>

          <div className="page2_message_4">
                <div className="page2_message_4_1">
                    <div className= "point-title">
                        エレクトロポーションによる導入で発毛効果・持続性がイオン導入の約60倍UP !
              </div>
                    </div>
            
            <div className="page2_message_4_image">
              <div className="page2_message_4_image_1">              
                    <img src="https://revolve-official.com/wp-content/uploads/2021/05/スクリーンショット-2021-04-29-13.49.49.png" className="image" alt="エレクトロポーション拡大図" />
              </div>
            </div>
            
                  <div className="page2_message_4_2">そもそもヒト幹細胞培養液に限らず、どれだけ高級な美容液や育毛剤も<br/>ただ塗っているだけでは表面で止まっているだけで奥には浸透しません。</div>
            <div className="page2_message_4_image">
                    <div className="page2_message_4_image_2">
                      <img src="https://revolve-official.com/wp-content/uploads/2021/05/スクリーンショット-2021-02-10-13.55.35.png" className="image" alt="エレクトロポーションで発毛効果・持続性がアップ!" />
                </div>
              </div>
            {/* <!-- 以下はabsolute --> */}
            <div className="page2_message_4_abusolute">
              当サロンではLED治療に加え、エレクトロポーションを使いヒト幹細胞培養液の最高峰である<br/>
              臍帯血由来の培養液を頭皮に浸透させる事で髪の毛を作る毛母細胞を再生させます。<br/><br/>
              エレクトロポーションを使えば今まで注射する以外導入することができなかった<br/>
              高分子のものも導入可能になります。イオン導入では難しかった高分子成分やコラーゲンやヒアルロン酸や<br/>
              ヒト幹細胞培養液を浸透させることができます。(浸透力はイオン導入の20~60倍と言われております)<br/>また
              <span className="yellow">
                痛みを感じることはありませんので「痛みに弱い」という方や「注射が苦手」な方でも安心です。
              </span>
            </div>
            {/* <!-- 以上はabsolute --> */}
          </div>

            <div className="stress-hair_box">
            <div className="stress-hair">
              <div className= "point-title">
                        薄毛 = ストレス を解決する独自技術
              </div></div>
                <div className="stress-hair_1">人はストレスを感じると血液中に<span className="red">コルチゾール</span>（ストレスホルモン）を分泌します。このコルチゾールが髪の原料となるタンパク質を食べてしまう為、髪が育ちにくくなり抜け毛、薄毛につながってしまいます。</div>
              <div className="stress-hair_image">
                      <div className="stress-hair_image_1">
                        <img src="https://revolve-official.com/wp-content/uploads/2021/05/スクリーンショット-2021-04-29-11.05.19.png" className="image" alt="ストレスによる薄毛・抜け毛治療" />
              </div>
            </div>
            {/* <!-- 以下はabsolute --> */}
            <div className="stress-hair_abusolute">
                  当サロンが研究に研究を重ねた結果、<br/>頭にある反射区を刺激することで髪の毛を作る<br/>毛母細胞の老朽化の原因である<span className="yellow">コルチゾールの<br/>分泌を抑制</span>できることが判明しました !
            </div>
          </div>

          <div className="page3_message_4">
            <h3>
              あなた自信が薄毛の原因をわかっていますか?
            </h3>
          </div>

          <div className="page3_message_5">
            実は、薄毛で悩んでいる方で 「
            <span className="page3_message_5_1">自分自身の薄毛の原因</span>」
            をわかっていない方は大多数いらっしゃいます!!
          </div>

          <div className="page3_message_5_image">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/image-02.jpeg" className="image" />
          </div>

          <div className="page3_message_6_title">
            薄毛の原因は主に2つ。
          </div>
          <div className="page3_message_6">
            １つは「毛髪サイクルの乱れ」でもう1つは「加齢によるコラーゲン等の減少」です。<br/><br/>
            髪の毛は2~6年ほどで成長しては抜け落ちてというサイクルを繰り返し、<br/>
            通常毎日100本ぐらいの髪の毛は誰でも抜けています。<br/><br/>
            しかしなんらかの原因で毛母細胞の働きが弱くなるってくると<br/>
            次第に細くて柔らかい毛しか生えて来なくなります。<br/>
            その結果薄毛の原因になります。
          </div>

          <div className="page3_message_6_image">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/image-03.jpeg" className="image" />
          </div>

          <div className="page3_message_6">
            また頭皮のコラーゲンが不足すると、髪の毛や毛母細胞自身を痛める原因<br/>にもなるので、その結果薄毛を誘発してしまいます。
          </div>


          <div className="page3_message_4">
            毛母細胞が弱ると薬や従来の施術では難しい...?
          </div>

          <div className="page3_message_8">
              毛髪細胞が髪の毛を生成する機能が残っていれば、<br/>
              若々しい髪の毛に戻すために従来通りのアプローチでも有効な場合があります。<br/>
              しかし、毛髪細胞がある一定の水準まで弱ってしまったり、<br/>
              そもそも細胞が死んでしまっていると二度と元の状態に戻すことはできません。<br/>

            <div className="page3_message_8_1">つまり毛髪細胞が「手遅れ状態」に陥ってしまった方は泣き寝入りするしかなかったのです...</div>
          </div>

          <div className="page3_message_9">
              しかし医療の進歩によって「再生医療技術」が進化し、<br/>
              今までになかった新しい毛髪へのアプローチが可能になりました。
          </div>
        </section>
          
          <section className="desire">
            <div className="desire_box">
                    <div className="intro"><span className="red">LED +<br/>エレクトロポーション +<br/>独自技術 +<br/>臍帯血ヒト幹細胞培養液<br/></span>
                        <span className="size">の組み合わせによって</span>
              </div>
                    <h4>実際に多くの方々が<span className="red">驚きの発毛効果</span>を実感されています！</h4>
              <div className="vision_box">
                      <div className="vision_img_1">
                          <img src="https://revolve-official.com/wp-content/uploads/2021/05/image-003.jpeg" className="image" alt="つむじ薄毛治療" />
                </div>
                <div className="vision_img_2">
                            <img src="https://revolve-official.com/wp-content/uploads/2021/05/image-004.jpeg" className="image"  alt="分け目薄毛治療" />
                </div>
              </div>
            </div>
          </section>
          
          
        <div className="reservation_box">
          <div className="page3_message_title">
            <span>ホームページを見た方限定</span>
          </div>

          <div className="page3_message_title_sub">最先端の幹細胞施術による発毛促進</div>
          <div className="page3_message_1">
            <span className="page3_message_1_1">初回</span>カウンセリング&nbsp;&nbsp;  <span className="price8000">￥８,０００</span><br/>
          </div>

          <div className="page3_message_2">
            <div className="page3_message_2_1">まずは<br/>ご相談ください<br/></div>
            <div className="page3_message_3_image">
              <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-6.png" className="allow_icon" />
            </div>
          </div>

          <div className="page3_message_3__">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/26526.png" className="page3_message_3_1_img" />
            <span className="page3_message_3_1">06-7410−1982</span><span className="price2980"> ￥２,９８０</span>
          </div>

          <div className="yoyaku_box">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSep5-XsGXON93wIkhrNBaoX9Q6eTLv7LH5QT5KFOyHE6SCebw/viewform">初回カウンセリング予約</a>
          </div>

          <div className="page3_message_2_">
            初回カウンセリングの流れ
          </div>
          <div className="No">01</div>
          <div className="page3_message_3">
            専門スタップによるカウンセリング
          </div>
          <div className="No">02</div>
          <div className="page3_message_3">
            まずは現状をしっかり把握
          </div>
          <div className="No">03</div>
          <div className="page3_message_3">
            発毛・育毛に徹底したアドバイス
          </div>
          <div className="No">04</div>
          <div className="page3_message_3">
            今後の状態に見通しができる
          </div>
        </div>
          <section className="consent">
          <div className="page2_message_4_5">
            <div className="point-title">
              TVでも当院の施術が話題に！
              </div>
          </div>
          <div className="page2_message_4_iframe">
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/b_aTGKeWGA0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframe"></iframe>
            </span>
          </div>

          <div className="page2_message_4_6">
            <div className="point-title">
              こちらで分かりやすく解説しています 			 
            </div>
          </div>
        <div className="page2_message_4_iframe">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/X3ife-OcREI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframe"></iframe>
        </div>
          
          <div className="page4_message_1">
            お客様の声
          </div>
          <div className="page4_message_1_image">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-4.png" className="b-a_image" />
          </div>
          <div className="page4_message_1_age">
            53歳 &nbsp;&nbsp;&nbsp;女性
          </div>
      
          <div className="page4_message_2">
            カウンセリングで悩みの原因や、<br/>どうしたら髪の毛が生えてくるのかを<br/>丁寧におしえていただきました!
          </div>
          <div className="page4_message_3">
            ボリュームが気になり、いつしか分け目をどう隠そうかと気になっていたところ、<br/>
            Re’volveさんのホームページを見つけて カウンセリングをお願いしました。<br/><br/>
            最初はかなり不安だったのですが、カウンセリングで悩みの原因や、<br/>
            どうしたら髪の毛が生えてくるのかを丁寧に教えて頂いたおかげで 不安が和らぎ、<br/>
            自分がどう変わっていくのか今後が楽しみになりました。<br/><br/>
            発毛施術を受けるにあたって私の場合は、<br/>
            １ヶ月半を過ぎたところで普段の抜け毛が減ったのを実感しました。<br/><br/>
            それから半年後の今では、気になっていた分け目を隠さなくてもよくなるなんて、<br/>
            当時は想像もしていませんでした。<br/><br/>
            おかげさまで、人の目を気にせず毎日を送ることが出来ています。<br/><br/>
            最初は不安でしたが、先生の応援もあって続ける事が出来ました。<br/>
            ありがとうございました。
          </div>
          
          <div className="page4_message_1_image">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-5.png" className="b-a_image" />
          </div>
          <div className="page4_message_2">
            毎朝、鏡を見てセットをするのが<br/>楽しみになっています。
          </div>
          <div className="page4_message_1_age">
            61歳 &nbsp;&nbsp;&nbsp;女性
          </div>
          <div className="page4_message_3">
            今まではパーマをあてるとボリュームが出ていましたが、ここ最近はパーマを<br/>
            あてても満足いくようなボリュームがなく、髪の毛が痩せ細ってきたような気がします。<br/><br/>
            歳なので仕方ないかなと思いつつも、若々しくいたいなという気持ちがあり、<br/>
            勇気を出してカウセリングを申し込みました。<br/><br/>
            一つ一つ丁寧で分かりやすい説明でしたので、諦めずに挑戦してみようと思えました。<br/><br/>
            施術を受けて3ヶ月経過した頃から、<br/>
            気になっていた分け目の辺りに少し毛が生えてきました。<br/><br/>
            ぺたんこでパーマをあてないと嫌だったのに もう、あてなくても良くなりそうな気がして<br/>
            今では、毎朝鏡を見てセットをするのが楽しみになっています。<br/>
          </div>
          
          <div className="page4_message_2">
            当ページから限定の特別な料金で<br/>初回カウンセリングをさせていただきます!
          </div>

          <div className="page5_message_1_image_box">
                <img src="https://revolve-official.com/wp-content/uploads/2021/05/image-04.jpeg" className="owner_image" />
            <div className="page5_message_1_image_text">
            本町店オーナーの吉田です!
            </div>
          </div>

          <div className="page4_message_3"><br/>
            薄毛、頭皮の状態に悩んでいる人の多くは、<br/>
            「自分に合った正しい育毛の知識」を知らないことがほとんどです。<br/><br/>
            そのために間違った方法を取ってしまったり、効果のない商材を<br/>
            何度も買ってしまい損をすることが多く、「薄毛は改善できない」<br/>
            と思ってしまっている人も相当数います。<br/><br/>
            しかし、正しい知識を知ればマイナスの固定観念がなくなります。<br/>
            少なくともあなたの心はスッとだいぶ楽になります。<br/><br/>
            精神的にポジティブな思考になり、もっと人生を楽しむためにも、<br/>
            ぜひこの機会にカウンセリングを受けてみませんか？<br/><br/>
            しっかり責任を持って、丁寧に向き合いますので<br/>
            少しの勇気と希望を持ってぜひご来店くださいませ！<br/>
          </div>
          </section>
      
          <div className="reservation_box">
            <div className="page3_message_2_">
              初回カウンセリングの流れ
            </div>
            <div className="page3_message_3">
            専門スタッフによるカウンセリング
            </div>
            <div className="page6_message_1">
              専門スタッフがお客様のお悩みをしっかりお聞き致します
      　　　　　　　　</div>
            <div className="page3_message_3">
              まずは現状をしっかり把握
            </div>
            <div className="page6_message_1">
                マイクロスコープを使い、頭皮の現状をしっかりチェック致します
            </div>
            <div className="page3_message_3">
              発毛・育毛に徹底したアドバイス
            </div>
            <div className="page6_message_1 page6_message_1_exc">ご家庭でして頂いた方が良いケア、しない方が良いケアをお教え致します
      　　　　　　　　</div>
            <div className="page3_message_3">
              今後の状態の見通しが出来る
            </div>
      
            <div className="page6_message_1_end">
              薄くなる原因を徹底的に分析し、カウンセリングが終わる頃には、<br/>
              今抱えているお悩みの原因を解消いたします!!
            </div>
      
            {/* <!-- 以下はabsolute --> */}
            <div className="page6_message_image1">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-6.png" className="allow_icon" />
            </div>
            <div className="page6_message_image2">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-6.png" className="allow_icon" />
            </div>
            <div className="page6_message_image3">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-6.png" className="allow_icon" />
            </div>
            {/* <!-- 以上はabsolute --> */}
      
            <div className="page3_message_title">
              <span>ホームページを見た方限定</span>
            </div>
            <div className="page3_message_title_sub">最先端の幹細胞施術による発毛促進</div>
            <div className="page3_message_1">
              <span className="page3_message_1_1">初回</span>カウンセリング  <span className="price8000">￥８,０００</span><br/>
            </div>
            <div className="page3_message_2">
              <div className="page3_message_2_1">まずは<br/>ご相談ください<br/></div>
            <div className="page6_message_image4">
                <img src="https://revolve-official.com/wp-content/uploads/2021/05/アセット-6.png" className="allow_icon" />
              </div>
            </div>
            <div className="page3_message_3__">
            <img src="https://revolve-official.com/wp-content/uploads/2021/05/26526.png" className="page3_message_3_1_img" />
              <span className="page3_message_3_1">06-7410−1982</span><span className="price2980"> ￥２,９８０</span>
            </div>
      
      　　　　　　　　<div className="yoyaku_box">
      　　　　　　　　　　　<a href="https://docs.google.com/forms/d/e/1FAIpQLSep5-XsGXON93wIkhrNBaoX9Q6eTLv7LH5QT5KFOyHE6SCebw/viewform">初回カウンセリング予約</a>
            </div>
          </div>
          
        <div className="info_box">
          <div className="infomation_line"></div>
          <div className="infomation">Infomation</div>
          <div className="infomation_line"></div>
          <div className="infomation_image">
            <img src="https://revolve-official.com/wp-content/uploads/2021/04/Revolve-logo.png" alt="logo" className="info_image" width="600" height="300" />
            <br/>
            本町店の所在地
          </div>
      
          <div className="infomation_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8817111170133!2d135.4963631152652!3d34.68293479167717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71d62c8065b%3A0xba12c9e826b33a86!2z44CSNTQxLTAwNTMg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65pys55S677yU5LiB55uu77yU4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1613025845712!5m2!1sja!2sjp" width="900" height="500" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className="google_map"></iframe>
          </div>
      
          <div className="infomation_message">
            店舗名
          </div>
      
          <span className="infomation_message_text">ヒト幹細胞サロン Re'volve本町店</span>
      
          <div className="infomation_message">
            住所
          </div>
      
          <span className="infomation_message_text">大阪府中央区本町４丁目４ー１６ RE-012-080</span>
      
          <div className="infomation_message">
            電話番号
          </div>
      
          <span className="infomation_message_text">06-7410-1982</span>
      
          <div className="infomation_message">
            メール
          </div>
      
          <span className="infomation_message_text">support@revolve-hair.com</span>
      
          <div className="infomation_message">
            営業時間
          </div>
      
          <span className="infomation_message_text">10:00〜20：00(完全予約制)</span>
      
          <div className="infomation_message">
            定休日
          </div>
      
          <span className="infomation_message_text">  無休(年末年始12/29〜1/4除く)</span>
      
          <div className="infomation_message">
            駐車場
          </div>
      
          <span className="infomation_message_text">大変申し訳ございません。ご用意しておりません。</span>
        </div>
        <div id="under-fix">
          <ul id="nav">
            <li className="fix1"><a href="https://docs.google.com/forms/d/e/1FAIpQLSep5-XsGXON93wIkhrNBaoX9Q6eTLv7LH5QT5KFOyHE6SCebw/viewform">WEBで予約</a></li> 
            <li className="fix2"><a href="https://line.me/R/ti/p/%40170wzspd">LINEで予約</a></li>
            <li className="fix3"><a href="https://docs.google.com/forms/d/e/1FAIpQLScZQfF66CX4McXkESbbRglWnP6XmjxGCNnktxFO0X8lRe3_xg/viewform">お問い合わせ</a></li>
          </ul>
          </div>
        </div>
      </div>
      </div>
      <style>
        {
`      body {
        background-color: #f4f5f7;
        font-weight: bold;
        font-family: Meiryo, "メイリオ", "Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3", Osaka, Verdana, serif;
        }
        ol {
            list-style-type: none;
          }
        h2 {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 991px) {
          footer {
            margin: 20px 7%;
            font-size: 1rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
        @media screen and (max-width: 767px) {
          h2 {
            font-size: 1.2rem;
            line-height: 25px;
          }
          h4 {
            font-size: 1.1rem;
          }
          footer {
            margin: 20px 7%;
            font-size: 1rem;
          }
        }
        @media screen and (max-width: 1200px) {
          h2 {
            font-size: 2rem;
          }
        }
        /* @import url("reset/normalize.css"); */

/* body {
  background-color: #f4f5f7;
  font-weight: bold;
  font-family: Meiryo, "メイリオ", "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", Osaka, Verdana, serif;
} */

#container {
  width: 100%;
}

/* ol {
  list-style-type: none;
} */

.header_box {
  text-align: center;
  width: 100%;
}

.interest {
  margin: 100px 0 0 0;
}

.imagine {
  text-align: center;
  margin: 100px 5%;
}

.desire {
  text-align: center;
  margin: 0 5%;
}

.comparsion {
  margin: 0 5%;
}

.consent {
  text-align: center;
  margin: 0 5%;
}

.reservation_box {
  text-align: center;
  margin: 50px 5% 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 10px 0 40px 0;
  position: relative;
}

.info_box {
  text-align: center;
  margin: 150px 5%;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.h2_box {
  text-align: center;
  margin: 100px 5%;
}

/* h2 {
  font-size: 2.5rem;
} */

.upper_lin {
  width: 68%;
  height: 1px;
  text-align: center;
  margin: 0 16%;
  border-bottom: solid 3px #333333;
}

.page1_message_1 {
  text-align: center;
  font-size: 2rem;
  margin: 3%;
}
.under_line {
  width: 80%;
  height: 1px;
  text-align: center;
  margin: 0 10% 15% 10%;
  border-bottom: solid 3px #333333;
}

.page1_message_2 {
  margin: 0 9% 1%;
  font-size: 3rem;
  float: left;
  height: 80px;
}
.page1_message_2_1 {
  color: #ff0023;
  font-size: 6rem;
  font-weight: bold;
  text-shadow: 7px 7px 3px #808080;
  padding-left: 10%;
}
.page1_message_2_2 {
  font-weight: bold;
  line-height: 4rem;
}

.page1_message_2_2_1 {
  font-weight: bold;
  line-height: 4rem;
}

.page1_message_4 {
  margin: 15% 0;
  background-color: #ff00a51f;
  padding: 3%;
  position: relative;
}
.page1_message_4_title {
  text-align: center;
}
.page1_message_4_title_1 {
  font-weight: bold;
  width: 70%;
  margin: 0 15%;
  font-size: 2.3rem;
  border-bottom: solid 1.5px #777777;
  padding-bottom: 5px;
}
.page1_message_4_title_1_1 {
  font-weight: bold;
  margin: 5px;
}
.page1_message_4_title_1_2 {
  font-weight: bold;
  margin: 5px;
  color: red;
}
.page1_message_4_title_li {
  margin: 20px 0;
  font-size: 1.8rem;
}

.page1_message_5 {
  position: absolute;
  left: 15%;
  top: 390px;
  font-size: 2rem;
  padding: 20px 60px;
  background-color: #0071bb;
  color: white;
  border: solid 3px white;
  border-radius: 10px;
}
.page1_message_5:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 15%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-bottom: 15px solid #0071bb;
}
.page1_message_image {
  position: absolute;
  left: 64%;
  top: 123px;
}

.page1_message_6 {
  font-size: 2rem;
  margin: 10px 0 100px;
  font-weight: bold;
  text-align: center;
}

.page1_message_6_yyy {
  padding-left: 10px;
}

.page1_message_6_1 {
  color: red;
  font-size: 2.8rem;
  /*   -webkit-text-emphasis: filled circle #BF2D32;
  text-emphasis: filled circle #BF2D32; */
}

.page1_message_6_table {
  width: 100%;
  height: 300px;
}
.page2_message_1 {
  text-align: center;
}

.page2_message_2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}

.page2_message_2_2 {
  color: blue;
}

.page2_message_2_4 {
  font-size: 2rem;
}
.page2_message_2_5 {
  font-size: 2rem;
  color: red;
}
.page2_message_2_6 {
  font-size: 1rem;
}

.baiyoueki_img_box {
}

.baiyoueki_img_1 {
  padding: 10px;
  background-color: white;
  width: 320px;
  margin: 0px auto;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
}

.saitaiketu_box {
  margin-top: 50px;
}

.page2_message_3 {
  text-align: center;
  font-size: 1.8rem;
  line-height: 35px;
  margin: 0 15%;
}
.page2_message_2_7 {
  font-size: 1.3rem;
  display: block;
  padding-top: 20px;
}

.page2_message_3_title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 80px;
}
.page2_message_3_title_line {
  margin: 10px 40%;
  width: 20%;
  height: 1px;
  border-bottom: solid 3px #777777;
}

.page2_message_100 {
  position: relative;
}

.page2_message_3_1 {
  color: white;
  background-color: #0071bb;
  margin: 40px 15%;
  padding: 0px 3%;
  text-align: center;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.point-title {
  padding: 25px 0px 25px 100px;
  list-style: none;
  /* background-image: url(image/fin.png); */
  background-repeat: no-repeat;
  background-position: left center;
  font-size: 2rem;
}

.page2_message_3_image {
  padding: 10px;
  background-color: white;
  width: 620px;
  margin: 50px auto 0px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.page2_message_3_abusolute {
  font-size: 1.6rem;
  position: absolute;
  background-color: #0099ff;
  padding: 5% 1%;
  color: white;
  top: 620px;
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.page2_message_3_abusolute:before {
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  border-color: rgba(0, 153, 255, 0);
  border-top-width: 42px;
  border-bottom-width: 42px;
  border-left-width: 49px;
  border-right-width: 49px;
  margin-left: -49px;
  border-bottom-color: #0099ff;
  bottom: 100%;
  left: 50%;
}

.led_explain {
  font-size: 1.8rem;
  margin-top: 480px;
}

.page2_message_4 {
  margin: 100px 0 550px 0;
  text-align: center;
  position: relative;
}

.page2_message_4_image {
  padding: 10px;
  background-color: white;
  width: 620px;
  margin: 50px auto 0px;
  box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.5);
}

.page2_message_4_iframe {
  width: 580px;
  padding: 10px;
  background-color: white;
  margin: 40px auto;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
}

.page2_message_4_image_1 {
}

.page2_message_3_abusolute_1 {
  font-size: 1.7rem;
}

.page2_message_4_1 {
  color: white;
  background-color: #0071bb;
  margin: 40px 15%;
  padding: 0px 3%;
  text-align: center;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.page2_message_4_2 {
  margin-top: 80px;
  font-size: 1.6rem;
}

.page2_message_4_abusolute {
  font-size: 1.6rem;
  line-height: 1.2em;
  position: absolute;
  background-color: #0099ff;
  padding: 5% 1%;
  color: white;
  top: 1160px;
  border-radius: 20px;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
}

.page2_message_4_abusolute:before {
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  border-color: rgba(0, 153, 255, 0);
  border-top-width: 42px;
  border-bottom-width: 42px;
  border-left-width: 49px;
  border-right-width: 49px;
  margin-left: -49px;
  border-bottom-color: #0099ff;
  bottom: 100%;
  left: 50%;
}

.yellow {
  color: #ffff00f5;
}

.stress-hair {
  color: white;
  background-color: #0071bb;
  margin: 40px 15%;
  padding: 0px 3%;
  text-align: center;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
}

.stress-hair_box {
  position: relative;
  margin-bottom: 400px;
}

.stress-hair_1 {
  margin-top: 80px;
  font-size: 1.6rem;
}

.stress-hair_image {
  margin-top: 60px;
  padding: 10px;
  background-color: white;
  margin: 40px auto;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
  width: 620px;
}

.stress-hair_abusolute {
  font-size: 1.6rem;
  position: absolute;
  background-color: #0099ff;
  padding: 5% 1%;
  color: white;
  top: 810px;
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.stress-hair_abusolute:before {
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  border-color: rgba(0, 153, 255, 0);
  border-top-width: 42px;
  border-bottom-width: 42px;
  border-left-width: 49px;
  border-right-width: 49px;
  margin-left: -49px;
  border-bottom-color: #0099ff;
  bottom: 100%;
  left: 50%;
}

.page2_message_4_5 {
  color: white;
  background-color: #0071bb;
  margin: 40px 25%;
  padding: 0px 3%;
  text-align: center;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.page3_message_title {
  padding-top: 20px;
  font-size: 3rem;
}

.page3_message_title_sub {
  margin: 30px 20%;
  font-size: 2.5rem;
  background-color: #0071bb;
  color: white;
  border-radius: 10px;
  padding: 10px;
}
.page3_message_1 {
  font-size: 3.4rem;
  padding-left: 5%;
}
.page3_message_1_1 {
  font-size: 3.4rem;
}
.price8000 {
  /* background-image: url("image/line.png"); */
  background-repeat: repeat-x;
  background-position: center;
}
.page3_message_2 {
  font-size: 2rem;
  position: relative;
}
.page3_message_2_1 {
  margin: 10px 30% 20px 0;
}

.page3_message_3__ {
  font-size: 4rem;
}

.page3_message_3_1_img {
  margin: 10px;
}
.price2980 {
  color: red;
}

.page3_message_3_image {
  position: absolute;
  left: 70%;
  top: 0px;
}

.page3_message_3_ {
  margin: 20px 10%;
  padding: 40px;
  color: white;
  background-color: hotpink;
  font-size: 2rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
}

.tr {
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 40px solid #fff;
  transform: translateY(26px);
  padding-left: 20px;
}
.page3_message_2_ {
  font-size: 2.5rem;
  margin: 60px 5% 40px 5%;
  padding: 20px;
  color: white;
  background-color: #0071bb;
  border-radius: 60px;
}

.No {
  display: inline-block;
  font-size: 3rem;
  color: white;
  background-color: #0071bb;
  padding: 25px;
  border-radius: 150px;
}
.page3_message_3 {
  font-size: 2rem;
  margin: 20px 5% 30px 5%;
  padding: 20px;
  background-color: #ff00001f;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}
.page3_message_4 {
  font-size: 2rem;
  margin: 100px 15% 50px;
  color: white;
  border-radius: 30px;
  background-color: #0071bb;
  padding: 10px 5%;
}
.page3_message_4_1 {
  text-align: left;
}
.page3_message_4_2 {
  text-align: right;
}

.page3_message_5 {
  margin: 20px 0;
  font-size: 1.8rem;
  padding: 20px 0;
}
.page3_message_5_1 {
  color: red;
}
.page3_message_6_title {
  margin: 20px 0 0 0;
  color: red;
  font-size: 2.4rem;
}

.page3_message_6 {
  font-size: 1.6rem;
  margin: 40px 0 50px 0;
}

.page3_message_8 {
  margin: 40px 0 30px 0;
  font-size: 1.5rem;
}
.page3_message_8_1 {
  margin-top: 25px;
  color: red;
}

.page3_message_9 {
  font-size: 1.5rem;
}

.desire_box {
  font-size: 2.5rem;
}

.intro {
  margin-bottom: 30px;
}

.size {
  font-size: 2rem;
}

.vision_img_1 {
  margin-top: 60px;
  padding: 10px;
  background-color: white;
  margin: 40px auto;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
  width: 620px;
}

.vision_img_2 {
  padding: 10px;
  background-color: white;
  margin: 80px auto 40px;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
  width: 620px;
}

.page4_message_1 {
  font-size: 2.1rem;
  margin: 150px 20% 20px;
  color: white;
  border-radius: 30px;
  background-color: #11c31e;
  padding: 20px 5%;
}
.page4_message_1_age {
  margin: 10px 0;
  font-size: 2rem;
}
.page4_message_2 {
  font-size: 1.8rem;
  margin: 20px 10%;
  color: white;
  border-radius: 50px;
  background-color: #11c31e;
  padding: 10px;
}

.page4_message_3 {
  text-align: left;
  margin: 10px 0 100px 0;
  padding: 40px 0 40px 3%;
  background-color: #ff000005;
  font-size: 1.4rem;
  border-radius: 30px;
}

.page5_message_1_image_box {
  margin: 50px auto;
  width: 560px;
  background-color: white;
  height: 460px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
}

.page5_message_1_image {
  padding: 20px;
}

.page5_message_1_image_text {
  margin-top: 10px;
  font-size: 1.8rem;
}

.No2 {
  display: inline-block;
  font-size: 1.8rem;
  color: white;
  background-color: #0071bb;
  padding: 25px;
  border-radius: 150px;
}

.page6_message_1 {
  font-size: 1.5rem;
  margin: 60px 0 50px 15%;
}

.page6_message_1_exc {
  padding-left: 8%;
}

.page6_message_1_end {
  font-size: 1.5rem;
  margin: 60px 0px 50px 15%;
}

.page6_message_image1 {
  position: absolute;
  left: 13%;
  top: 300px;
}
.page6_message_image2 {
  position: absolute;
  left: 13%;
  top: 510px;
}
.page6_message_image3 {
  position: absolute;
  left: 13%;
  top: 720px;
}
.page6_message_image4 {
  position: absolute;
  left: 70%;
  top: -5px;
}

.infomation {
  margin: 11px 0 9px 0;
  font-size: 3rem;
}
.infomation_line {
  width: 30%;
  margin: 0 35%;
  height: 1px;
  border-bottom: solid 1.5px #333333;
}
.infomation_image {
  margin: 20px 0;
  font-size: 2rem;
}

.infomation_map {
  margin: 40px 10% 80px;
}

.infomation_message {
  font-size: 2.5rem;
  margin: 30px 5%;
  padding: 10px;
  color: white;
  background-color: #0071bb;
  border-radius: 60px;
}
.infomation_message_text {
  font-size: 2.4rem;
}

.page2_message_4_6 {
  color: white;
  background-color: #0071bb;
  margin: 40px 15%;
  padding: 0px 3%;
  text-align: center;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
}

.tr2 {
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 40px solid #fff;
  margin-left: 20px;
  float: left;
}

#under-fix {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 999;
  font-size: 2rem;
}

#nav {
  list-style: none;
  margin: 0px;
  display: flex;
}

.fix1 {
  height: 100px;
  background-color: #ff62d6;
  background-image: url(https://revolve-official.com/wp-content/uploads/2021/05/予約・受付け看板の無料アイコン素材-2.png);
  background-repeat: no-repeat;
  background-position: 35px center;
  width: 34%;
}

.fix2 {
  height: 100px;
  background-color: #07b53b;
  background-image: url(https://revolve-official.com/wp-content/uploads/2021/05/LINE_SOCIAL_Circle.png);
  background-repeat: no-repeat;
  background-position: 30px center;
  width: 33%;
}

.fix3 {
  height: 100px;
  background-color: #e69e45;
  background-image: url(https://revolve-official.com/wp-content/uploads/2021/05/お問い合わせのアイコン-Q-Aの吹き出し-4-2.png);
  background-repeat: no-repeat;
  background-position: 30px center;
  width: 33%;
}

#nav a {
  color: #fff;
  text-decoration: none;
  display: block;
  height: 100%;
}

.fix1 a {
  padding: 35px 0 0px 35%;
}

.fix1:hover {
  background-color: #ff72e6;
}

.fix2 a {
  padding: 35px 0 0px 35%;
}

.fix2:hover {
  background-color: #17c54b;
}

.fix3 a {
  padding: 35px 0 0px 35%;
}

.fix3:hover {
  background-color: #f6ae55;
}

.yoyaku_box {
  width: 75%;
  margin: 80px auto;
  background: linear-gradient(-135deg, #ff9090, #ff62d6);
  font-size: 2rem;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
  border-radius: 90px;
  line-height: 1px;
}

.yoyaku_box a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 50px;
}

.yoyaku_box:hover {
  transform: scale(1.1); /*画像の拡大率*/
  transition-duration: 0.3s; /*変化に掛かる時間*/
}

@media screen and (max-width: 1200px) {
  .google_map {
    width: 100%;
  }

  .image {
    width: 100%;
  }

  .image-harf {
    width: 50%;
  }

  /* h2 {
    font-size: 2rem;
  } */

  .page1_message_image {
    display: none;
  }

  .interest {
    margin: 0;
  }

  .page1_message_2 {
    margin: 0 0 1% 2%;
  }

  .page2_message_3_title_line {
    margin: 10px auto;
    width: 70%;
  }

  .page2_message_3_image {
    margin: 50px auto 0px;
  }

  .page2_message_3_abusolute {
    width: 80%;
  }

  .page2_message_3_1 {
    margin: 40px 5%;
  }

  .stress-hair {
    margin: 40px 5%;
  }

  .stress-hair_abusolute {
    top: 840px;
    width: 80%;
  }

  .page2_message_4 {
    margin: 100px 0 650px 0;
  }

  .page2_message_4_1_1 {
    transform: translateY(-45px);
  }

  .page2_message_4_5 {
    margin: 40px 15%;
  }

  .page2_message_4_6 {
    margin: 40px 10%;
  }

  .page3_message_title_sub {
    margin: 50px 10%;
  }

  .page3_message_3_image {
    left: 78%;
  }

  .page3_message_3__ {
    font-size: 3.5rem;
  }

  .page3_message_4 {
    margin: 100px 5% 50px;
  }

  .page2_message_4_1 {
    margin: 40px 5%;
  }

  .page3_message_9 {
    font-size: 2rem;
  }

  .page4_message_1 {
    margin-top: 80px;
  }

  .page6_message_1_exc {
    padding-left: 5%;
  }

  .page6_message_image1 {
    left: 7%;
    top: 310px;
  }

  .page6_message_image2 {
    left: 7%;
    top: 540px;
  }

  .page6_message_image3 {
    left: 7%;
    top: 765px;
  }

  .page6_message_image4 {
    left: 78%;
  }

  .fix1 {
    background-position: 35px center;
    background-size: 45px;
  }

  .fix2 {
    background-position: 30px center;
    background-size: 68px;
  }

  .fix3 {
    background-position: 30px center;
    background-size: 50px;
  }
}

@media screen and (max-width: 991px) {
  .b-a_image {
    width: 60%;
  }

  .inline_img {
    width: 20px;
  }

  .iframe {
    width: 100%;
  }

  .google_map {
    width: 100%;
  }

  .point-title {
    padding-left: 50px;
  }

  .page1_message_1 {
    font-size: 1.2rem;
    margin: 5%;
  }

  .page1_message_image {
    display: none;
  }

  .page1_message_image {
    left: 64%;
    top: 1200px;
  }

  .page1_message_2 {
    text-align: center;
    margin: 0 9% 1%;
  }

  .page1_message_2_1 {
    font-size: 3rem;
    text-shadow: 3px 2px 3px #808080;
    text-decoration: none;
  }

  .page1_message_2_2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .page1_message_2_2_1 {
    font-size: 1.5rem;
  }

  .h2_box {
    margin: 100px 5%;
  }

  .page1_message_4_title_1 {
    font-size: 1.1rem;
  }

  .page1_message_4_title_li {
    font-size: 1rem;
  }

  .page1_message_5 {
    font-size: 1rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    top: 280px;
    width: 90%;
    text-align: center;
    padding: 20px 10px;
  }

  .page1_message_5:before {
    left: 50%;
  }

  .page1_message_6 {
    font-size: 1.5rem;
    margin: 150px 5% 30px;
  }

  .page1_message_6_1 {
    font-size: 1.6rem;
  }

  .page2_message_2 {
    font-size: 1rem;
  }

  .page2_message_2_2 {
    font-size: 1rem;
  }

  .page2_message_2_4 {
    font-size: 1rem;
  }

  .page2_message_2_5 {
    font-size: 1rem;
  }

  .page2_message_2_7 {
    font-size: 1rem;
  }

  .page2_message_3_title {
    font-size: 2rem;
  }

  .page2_message_3_title_line {
    margin: 10px auto;
    width: 70%;
  }

  .page2_message_3 {
    font-size: 1rem;
  }

  .page2_message_3_1 {
    margin: 40px 10%;
  }

  .page2_message_3_image {
    width: 80%;
    margin: 50px auto;
  }

  .page2_message_3_abusolute {
    line-height: 1.3em;
    top: 530px;
    width: 90%;
    font-size: 1rem;
  }

  .page2_message_3_abusolute:before {
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-width: 15px;
    border-right-width: 15px;
    margin-left: -20px;
  }

  .page2_message_3_abusolute_1 {
    line-height: 1.3em;
    font-size: 1.2rem;
  }

  .led_explain {
    font-size: 1rem;
    margin-top: 240px;
  }

  .page2_message_4 {
    margin: 50px 0 450px 0;
  }

  .stress-hair_1 {
    margin-top: 0px;
    font-size: 1rem;
  }

  .stress-hair_abusolute {
    font-size: 1rem;
    top: 720px;
    line-height: 1.5em;
    width: 70%;
  }

  .stress-hair_abusolute:before {
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-width: 15px;
    border-right-width: 15px;
    margin-left: -20px;
  }

  .stress-hair_box {
    margin-bottom: 270px;
  }

  .page2_message_4_1 {
    margin: 40px 10%;
  }

  .page2_message_4_1_1 {
    font-size: 1rem;
    padding: 10px;
  }

  .page2_message_100 {
  }

  .page2_message_4_abusolute {
    font-size: 1rem;
    line-height: 1.5em;
    top: 970px;
  }

  .page2_message_4_abusolute:before {
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-width: 15px;
    border-right-width: 15px;
    margin-left: -20px;
  }

  .point-title {
    font-size: 1.2rem;
    background-size: 30px;
  }

  .page2_message_4_2 {
    font-size: 1rem;
    margin: 50px 5% 0px;
    line-height: 20px;
  }

  .page3_message_title {
    font-size: 1.5rem;
  }

  .page3_message_3_image {
    top: 6px;
    left: 70%;
  }

  .page3_message_8 {
    margin: 40px 0 30px 0;
    font-size: 1rem;
  }

  .page2_message_4_6 {
    margin: 40px 10%;
  }

  .page3_message_1 {
    font-size: 1.8rem;
    padding-left: 2%;
  }

  .page3_message_1_1 {
    font-size: 1.8rem;
  }

  .page3_message_2 {
    font-size: 1.5rem;
  }

  .page3_message_2_1 {
    font-size: 1rem;
  }
  .page3_message_3_1_img {
    width: 25px;
    margin-bottom: 3px;
  }

  .page3_message_5 {
    font-size: 1rem;
  }

  .page2_message_4_image {
    width: 80%;
  }

  .page2_message_4_iframe {
    width: 90%;
  }

  .page3_message_6 {
    font-size: 1rem;
  }

  .page3_message_6_title {
    font-size: 1.2rem;
  }

  .page3_message_title_sub {
    font-size: 1.5rem;
  }

  .page3_message_2_ {
    font-size: 1.2rem;
  }

  .page3_message_3 {
    font-size: 1rem;
    margin: 20px 5% 30px 5%;
  }

  .page3_message_3__ {
    font-size: 1.8rem;
  }

  .page4_message_3 {
    font-size: 1rem;
    margin: 30px 0 100px 0;
    padding: 30px 0 40px 3%;
  }

  .page3_message_4 {
    font-size: 1.2rem;
    margin: 50px 15% 0px;
  }

  .desire_box {
    font-size: 1.5rem;
  }

  .size {
    font-size: 1.2rem;
    line-height: 50px;
  }

  .page3_message_9 {
    font-size: 1rem;
  }

  .page3_message_title {
    padding: 30px 0 20px;
  }

  .page4_message_1_age {
    font-size: 1.2rem;
  }

  .page4_message_1 {
    font-size: 1.2rem;
    margin: 20px 5%;
  }

  .page4_message_2 {
    font-size: 1rem;
  }

  .page5_message_1_image_box {
  }

  .owner_image {
  }

  .page5_message_1_image_text {
    font-size: 1.2rem;
    margin-top: 15px;
  }

  .page6_message_1 {
    font-size: 1rem;
  }

  .page6_message_1_end {
    font-size: 1rem;
    margin: 20px;
  }

  .page6_message_image1 {
    left: 75px;
    top: 285px;
  }

  .page6_message_image2 {
    left: 75px;
    top: 480px;
  }

  .page6_message_image3 {
    left: 75px;
    top: 660px;
  }

  .page6_message_image4 {
    top: 6px;
    left: 69%;
  }

  .allow_icon {
    width: 30px;
  }

  .No {
    font-size: 1rem;
    padding: 15px;
  }

  .infomation_image {
    font-size: 1rem;
  }

  .info_image {
    width: 100%;
  }

  .infomation_map {
    margin: 20px 0 100px;
  }

  .infomation_line {
    width: 80%;
    margin: 0 auto;
  }

  .infomation {
    font-size: 2rem;
  }

  .infomation_message {
    font-size: 1rem;
  }

  .infomation_message_text {
    font-size: 1rem;
  }

  /* footer {
    margin: 20px 7%;
    font-size: 1rem;
  } */

  .footer-text {
    padding-left: 10%;
  }

  #under-fix {
    font-size: 1.2rem;
  }

  .fix1 {
    background-position: 15px center;
  }

  .fix1 a {
    padding: 42px 0 0px 40%;
  }

  .fix2 {
    background-position: 15px center;
  }

  .fix2 a {
    padding: 42px 0 0px 40%;
  }

  .fix3 {
    background-position: 15px center;
  }

  .fix3 a {
    padding: 42px 0 0px 40%;
  }

  .yoyaku_box {
    font-size: 1.2rem;
  }

  /* h2 {
    font-size: 1.5rem;
  } */
}

@media screen and (max-width: 767px) {
  .inline_img {
    width: 12px;
  }

  .iframe {
    width: 100%;
    height: 200px;
  }

  .google_map {
    width: 100%;
  }

  .interest {
    margin: 0px 5%;
  }

  .imagine {
    margin: 100px 5% 50px;
  }

  .page1_message_6_table {
    height: 120px;
  }

  /* h2 {
    font-size: 1.2rem;
    line-height: 25px;
  } */

  .h2_box {
    margin: 50px auto;
  }

  .page1_message_1 {
    font-size: 1.2rem;
    margin: 5%;
  }

  .page1_message_image {
    display: none;
  }

  .page1_message_image {
    left: 64%;
    top: 1200px;
  }

  .page1_message_2 {
    float: none;
    margin-bottom: 50px;
  }

  .page1_message_2_1 {
    font-size: 3rem;
    text-shadow: 3px 2px 3px #808080;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .page1_message_2_2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .page1_message_2_2_1 {
    font-size: 1.5rem;
  }

  .page1_message_4 ol {
    padding-inline-start: 0px;
  }

  .page1_message_4_title_1 {
    font-size: 1rem;
  }

  .page1_message_4_title_li {
    font-size: 0.6rem;
  }

  .page1_message_5 {
    font-size: 0.8rem;
    top: 230px;
    width: 70%;
    padding: 12px 0;
  }

  .page1_message_5:before {
    left: 50%;
  }

  .page1_message_6 {
    font-size: 1rem;
    margin-top: 80px;
  }

  .page1_message_6_1 {
    font-size: 1.1rem;
  }

  .page2_message_2 {
    font-size: 0.9rem;
    margin-top: 0px;
  }

  .page2_message_2_2 {
    font-size: 1rem;
  }

  .page2_message_2_4 {
    font-size: 0.9rem;
  }

  .page2_message_2_5 {
    font-size: 1rem;
  }

  .baiyoueki_img_box {
    width: 80%;
    margin: 0px auto;
  }

  .baiyoueki_img_1 {
    width: 100%;
  }

  .saitaiketu_box {
    line-height: 25px;
  }

  .page2_message_2_7 {
    font-size: 0.8rem;
  }

  .page2_message_3_title {
    font-size: 2rem;
  }

  .page2_message_3_title_line {
    margin: 10px auto;
    width: 70%;
  }

  .page2_message_3 {
    font-size: 0.9rem;
    margin: 0;
  }

  .page2_message_3_1 {
    margin: 40px 0;
  }

  .page2_message_3_image {
  }

  .page2_message_3_abusolute {
    line-height: 1.3em;
    top: 330px;
    width: 90%;
    font-size: 0.8rem;
    font-weight: normal;
  }

  .page2_message_3_abusolute_1 {
    line-height: 1.3em;
    font-size: 1.2rem;
  }

  .led_explain {
    font-size: 0.8rem;
    margin-top: 220px;
  }

  .page2_message_4 {
    margin: 50px 0 380px 0;
  }

  .page2_message_100 {
  }

  .page2_message_4_abusolute {
    font-size: 0.8rem;
    line-height: 1.5em;
    top: 650px;
    font-weight: normal;
  }

  .page2_message_4_abusolute:before {
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-width: 15px;
    border-right-width: 15px;
    margin-left: -20px;
  }

  .point-title {
    font-size: 0.8rem;
    padding-left: 40px;
  }

  .stress-hair_1 {
    margin-top: 0px;
    font-size: 0.8rem;
  }

  .page2_message_4_1 {
    margin: 40px 0;
  }

  .page2_message_4_1_1 {
    transform: none;
  }

  .page2_message_4_2 {
    font-size: 0.8rem;
  }
  .page2_message_4_5 {
    margin: 0px 5%;
  }
  .stress-hair_image {
    width: 80%;
    margin: 50px auto;
  }
  .stress-hair_image {
    width: 90%;
    margin: 30px auto;
  }

  .page3_message_title {
    font-size: 1.5rem;
  }

  .page3_message_3_image {
    left: 75%;
  }

  .page3_message_8 {
    margin: 40px 0 30px 0;
    font-size: 0.8rem;
  }

  .page2_message_4_6 {
    margin: 8% 2% 4%;
  }

  .page3_message_1 {
    font-size: 1.2rem;
    padding-left: 9%;
  }

  .page3_message_1_1 {
    font-size: 1.2rem;
  }

  .page3_message_2 {
    font-size: 1.5rem;
  }

  .page3_message_2_1 {
    font-size: 1rem;
  }
  .page3_message_3_1_img {
    margin-bottom: 0px;
  }

  .page3_message_5 {
    font-size: 0.8rem;
  }

  .page2_message_4_image {
    margin-top: 30px;
  }

  .page2_message_4_iframe {
    width: 90%;
  }

  .page3_message_6 {
    font-size: 0.8rem;
  }

  .page3_message_6_title {
    font-size: 1.2rem;
  }

  .page3_message_title_sub {
    margin: 30px 5%;
    font-size: 0.8rem;
  }

  .page3_message_2_ {
    font-size: 1rem;
  }

  .page3_message_3 {
    font-size: 1rem;
    margin: 20px 5% 30px 5%;
  }

  .page3_message_3__ {
    font-size: 1.2rem;
  }

  .stress-hair_abusolute {
    font-size: 0.8rem;
    top: 470px;
    line-height: 1.5em;
    width: 90%;
    font-weight: normal;
  }

  .stress-hair_box {
    margin-bottom: 200px;
  }

  .page4_message_3 {
    font-size: 0.8rem;
    margin: 30px 0 50px 0;
    padding: 40px 0 40px 3%;
  }

  .page3_message_4 {
    font-size: 1rem;
    margin: 50px 0;
  }

  .desire_box {
    font-size: 1.2rem;
  }
  .size {
    font-size: 1rem;
    line-height: 50px;
  }

  .size {
    font-size: 0.8rem;
    line-height: 50px;
  }

  .page3_message_9 {
    font-size: 0.8rem;
  }

  .page3_message_title {
    padding: 30px 0 20px;
  }

  /* h4 {
    font-size: 1.1rem;
  } */

  .vision_box {
    margin: 0px auto;
  }

  .vision_img_1 {
    width: 100%;
  }

  .vision_img_2 {
    width: 100%;
  }

  .page4_message_1_age {
    font-size: 1rem;
  }

  .page4_message_1 {
    font-size: 1rem;
    margin: 70px 5% 20px;
  }

  .page4_message_2 {
    font-size: 0.8rem;
    margin: 20px 0;
  }

  .page5_message_1_image_box {
    width: 90%;
    height: 260px;
    margin: 30px auto 50px;
  }

  .b-a_image {
    width: 80%;
  }

  .owner_image {
    width: 90%;
  }

  .page5_message_1_image_text {
    margin-top: 17px;
    font-size: 1rem;
  }

  .page6_message_1 {
    font-size: 0.9rem;
    margin: 60px 20px 50px 70px;
  }

  .page6_message_1_exc {
    padding-left: 0%;
  }

  .page6_message_1_end {
    font-size: 0.9rem;
    margin: 20px;
  }

  .page6_message_image1 {
    left: 30px;
  }

  .page6_message_image2 {
    left: 30px;
    top: 505px;
  }

  .page6_message_image3 {
    left: 30px;
    top: 705px;
  }

  .page6_message_image4 {
    left: 75%;
  }

  .allow_icon {
    width: 30px;
  }

  .No {
    font-size: 0.8rem;
    padding: 10px;
  }

  .infomation_image {
    font-size: 1rem;
  }

  .info_image {
    width: 100%;
    height: 200px;
  }

  .infomation_map {
    margin: 20px 0 100px;
  }

  .infomation_line {
    width: 80%;
    margin: 0 auto;
  }

  .infomation {
    font-size: 2rem;
  }

  .infomation_message {
    font-size: 1rem;
  }

  .infomation_message_text {
    font-size: 1rem;
  }

  /* footer {
    margin: 20px 7%;
    font-size: 1rem;
  } */

  .footer-text {
    padding-left: 10%;
  }

  #under-fix {
    font-size: 0.8rem;
  }

  .fix1 {
    height: 70px;
    background-position: 10px center;
    background-size: 20px;
  }

  .fix1 a {
    padding: 30px 0 0px 30%;
  }

  .fix2 {
    height: 70px;
    background-position: 5px center;
    background-size: 30px;
  }

  .fix2 a {
    padding: 30px 0 0px 30%;
  }

  .fix3 {
    height: 70px;
    background-position: 10px center;
    background-size: 20px;
  }

  .fix3 a {
    padding: 30px 0 0px 30%;
  }

  .yoyaku_box {
    width: 90%;
    font-size: 1rem;
    margin: 50px auto 15px;
  }

  .yoyaku_box a {
    padding: 30px;
  }
}

/* ここからfrontページ用CSS */
.front-header_box {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  letter-spacing: 2px;
  background-color: #f4f5f7;
}

.logo {
  position: absolute;
}

.header-logo {
}

.header_menu {
  position: absolute;
  right: 0;
  text-align: center;
}

.menu_btn {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background: #ffa83d;
  border: none;
  width: 160px;
  height: 80px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  outline: none;
}

.front-img {
  width: 100%;
}
/* ここまでfrontページ用CSS */

        
        `
      }
      </style>
    </>
  )
}

export default NewTest