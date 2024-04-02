
import ContactForm from "./ContactForm";



  
  const Form = () => {
    
  
    
   
 
   
    return (
      <div className="lg:mx-14 mx-5 z-20 py-14">
       
       
          <div className="lg:grid grid-cols-2  justify-between items-center gap-14">
            <div>
            <div>
          <div className="space-y-4">
            <h2 className="font-bold text-xl text-orange-500">
              Did you try my recipe?
            </h2>
            <p className="text-justify">
              Vim no iudicabit vulputate, debet congue iuvaret ut vis. Te sale
              vulputate nec. Ut graecis deseruisse sit, pro quem elit pericula
              ad, facilisis scripserit dissentiunt no qui. Eam ea illum indoctum
              mediocritatem. Eam graece nusquam ei, eos at pertinacia
              appellantur, usu meliore feugait in. Te dolorum aliquando pri. Ex
              stet moderatius est, cu probo copiosae sed. Cum erroribus
              comprehensam ex. Denique assueverit reprehendunt per te, inani
              voluptua epicurei ut mei. Simul decore sed eu. Ex sea voluptatum
              inci derint sadipscing, posse suavitate no vix.
            </p>
            <p>
              Elit solet eu has, in has paulo debitis recteque. Cu pri apeirian
              vituperata, justo nostro inermis sit an. Qui zril contentiones ne,
              sanctus probatus ullamcorper eam at.
            </p>
            <p>E-mail: abc@qodeinteractive.com</p>
          </div>
        </div>
            </div>
            <div className="my-10">
            <h2 className="font-bold text-2xl mb-10">
            Do you have any <span className="text-orange-500">query</span>?
            Please <span className="text-orange-500">contact us</span>
          </h2>
              <ContactForm/>
            </div>
          </div>
        
        
      </div>
    );
  };
  
  export default Form;
  
