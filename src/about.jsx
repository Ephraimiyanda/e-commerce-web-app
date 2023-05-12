
import rectangle from "/images/people/Rectangle 38.png"
import about from "/images/Rectangle 46.png"
function AboutUs(){
    return(
      <div className="about-container">
 <div class="container">

<div class="first-half">
    <div class="class1">
        <h4>About Us</h4>
        <p>Welcome to our Agro e-commerce site! We are a team of passionate individuals who believe in the power of agriculture and it's ability to positively impact our world. </p>
    </div>
    <img class="fruit" src={about} alt=""></img>
        <div class="class2">
            <h4>  Vision</h4>
            <p> We are committed to sustainability and reducing our environmental footprint. That's why we work with farmers who practice sustainable farming methods, and we aim to minimize waste throughout our supply chain. </p>
        </div>
    </div>


<div class="second-half">
    <div class="class3">
        <h4> Mission</h4>
        <p> Our mission is to create a platform that connects farmers with consumers, making it easier for people to access fresh, locally-sourced produce while supporting small-scale agriculture. We understand the challenges that farmers face in today's fast-paced world, and we are committed to creating a platform that empowers them to reach a wider market and earn a fair price for their hard work. </p>
    </div>

    <div class="class4">
        <h4>Meet our team</h4>
        <p> Our team consists of experts in agriculture, technology, and e-commerce who have come together to create a seamless online experience for our users. We are constantly striving to improve our platform and make it more user-friendly, while also ensuring the highest standards of quality and freshness for our produce. </p>
    </div>

</div>






</div>

<div className="footer">
    
<div class="team "> <img class="people" src={rectangle} alt=""></img><span>Salamatu ceesay</span><p>Designer</p></div>
    <div class="team "><img class="people" src={rectangle}  alt=""></img><span>Khadijah Abk </span><p>Ui Designer</p></div>
    <div class="team "> <img class="people" src={rectangle}  alt=""></img><span>Antonia  </span><p>Frontend Designer</p></div>
    <div class="team "><img class="people" src= {rectangle} alt=""></img><span>Fauziyya Tajudeen </span><p>Backend Designer</p></div>
    <div class="team "> <img class="people" src={rectangle}  alt=""></img><span>Chiamaka </span><p>Frontend Designer</p></div>
    <div class="team "><img class="people" src={rectangle} alt=""></img><span>Ephraim</span><p>Frontend Designer</p></div>

</div>

      </div>
    
    )}
    export default AboutUs;