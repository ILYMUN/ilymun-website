import React, {Component} from 'react';
import {PlainPage} from './PlainPage';

export class HowToDebate extends Component {
  render() {
    return(
      <PlainPage>
        <h1 class="title">Learn how to Debate</h1>
        <h2>How to&nbsp;successfully prepare for&nbsp;ILYMUN</h2>
        <p>Each school has its own MUN (Model United Nations) club, whose members meet weekly to debate issues discussed in the UN, increasing their knowledge of the interconnected world we live in.</p>
        <p>We encourage all students participating in ILYMUN to thoroughly prepare themselves. It is the only way to reap benefits from the experience. Head over to the “Committees” page to discover the research reports the chairs have prepared for you!</p>
        <p>Communication with the delegates you will be debating with at ILYMUN is also a key part of a good delegate’s preparation. This is why we will shortly make a list available to all delegates with delegates’ emails, names, country and committee assignments.</p>
        <p>If you are unfamiliar with the rules and procedures of UN debates, you will find two explanatory documents as well as a video below (click on them to view in full scale). If you want even more information, you can <a href="https://web.archive.org/web/20181101190208/https://docs.google.com/document/d/1cTPkGrC2Ld0C8_q3aOjzo_qzDRNoPmpQs73ms8HLVjo/edit?usp=sharing">click here</a> and read the document.</p>
        <p>To ensure a high quality of debates, an External MUN Development team is dedicated to offering full assistance in building and/or developing MUN clubs for participating schools in need. If you are concerned, you may contact them through the ilymun support email address:&nbsp;support@ilymun.org</p>
        <p style={{textAlign: "center"}}>
            <iframe src="https://www.youtube.com/embed/2V1CpVOnuAY" width="100%" height="720px" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </p>
        <p><img style={{maxWidth: "100%"}} src={require("./Rules-and-Procedures.jpg")} /></p>
        <p><a href={require("./ILYMUN-rules-and-procedure.pdf")}>Click here to view the pdf version of the ILYMUN rules and procedures</a></p>
        <h2>Must know Concepts</h2>
        <h3><b>Points &amp; Motions:&nbsp;</b>What are they and how are they used?</h3>
        <blockquote>
            <p><i><span style={{fontWeight: 400}}>This is a guide for first time delegates who aren’t completely familiar </span></i></p>
            <p><i><span style={{fontWeight: 400}}>with all the different </span></i><b><i>points</i></b><i><span style={{fontWeight: 400}}> or </span></i><b><i>motions</i></b><i><span style={{fontWeight: 400}}> at an MUN conference.</span></i></p>
        </blockquote>
        <p><span style={{fontWeight: 400}}>The difference between a motion and a point is who it concerns. A motion involves the entire committee, while a point only involves a chair or delegate. For this reason a motion requires a vote. &nbsp;When a delegate proposes a motion, the chairs ask if there are any objections to the motion. If there are none, the motion is voted on. Neither points nor motions can interrupt speakers, unless it is a </span><i><span style={{fontWeight: 400}}>point of personal privilege</span></i><span style={{fontWeight: 400}}> to do with the audibility of the speaker.</span></p>
        <h4><b>Motions:</b></h4>
        <p><span style={{fontWeight: 400}}>When a delegate proposes a motion, another delegate must second it before the chairs will consider it and ask if there are any objections to the motion. &nbsp;If there are objections, then the motion is dropped. If there aren’t any objections, there is a vote, without abstentions. &nbsp;The motion passes if there are more votes in favour of the motion than against. All motions can be overruled by the chair.</span></p>
        <h5><b>Motion to extend debate time</b></h5>
        <p><span style={{fontWeight: 400}}>If passed this motion extends the amount of time allocated to the current clause or amendment.</span></p>
        <h5><b>Motion to table the amendment or clause</b></h5>
        <p><span style={{fontWeight: 400}}>If this motion is passed debate on the current clause or amendment is stopped without a vote or postponed until later.</span></p>
        <h5><b>Motion to reconsider an amendment or clause</b></h5>
        <p><span style={{fontWeight: 400}}>If this motion is passed debate on an amendment or clause that failed or has been tabled is resumed.</span></p>
        <h5><b>Motion to move to previous question</b></h5>
        <p><span style={{fontWeight: 400}}>If this motion passes debate on the current amendment or clause is stopped, there is a &nbsp;vote and the debate moves on.</span></p>
        <p>&nbsp;</p>
        <h4><b>Points:</b></h4>
        <h5><b>Point of information</b></h5>
        <p><span style={{fontWeight: 400}}>This is a question for the delegate who has the floor. The chair will ask the delegate if she is open to any points of information. If she is, she can state how many questions she’ll entertain or even say “any and all”. The chairs then ask if there are any points of information in the house.</span></p>
        <h5><b>Point of personal privilege.</b></h5>
        <p><span style={{fontWeight: 400}}>This point is only used if a delegate is experiencing discomfort or cannot hear the delegate talking. This is the only point or motion that can interrupt the speaker, if it refers to the audibility of the speaker.</span></p>
        <h5><b>Point of parliamentary inquiry</b></h5>
        <p><span style={{fontWeight: 400}}>A point of parliamentary inquiry is a question about the rules and procedures of a debate, and can only be asked when there is nobody on the floor.</span></p>
        <h5><b>Point of order </b></h5>
        <p><span style={{fontWeight: 400}}>A point of order refers to when a chair or a delegate makes a mistake. For a chair, this could be that he has made an error in the procedures, and for a delegate, it might be that he is doing something that his country would not do.</span></p>
      </PlainPage>
    );
  }
}