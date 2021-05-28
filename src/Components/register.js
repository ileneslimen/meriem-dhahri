import { useState} from "react";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import "../App.css";
import { submite } from "../JS/actions";

function Register() {
  const [nom, setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [sex,setSex]=useState('')
  const [bday,setBday]=useState('')
  const [nationalité, setnationalité] = useState('')
  const [email, setemail] = useState('')
  const [telephone, settelephone] = useState('')
  const [adress, setadress] = useState('')
  const [groupesanguin, setgroupesanguin] = useState('')
  const [allergie, setallergie] = useState('')
  const [maladie, setmaladie] = useState('')
  const [personne, setpersonne] = useState('')
  const [medicament, setmedicament] = useState('')
  const dispatch = useDispatch()
  const handlesubmit = () => {
   
    dispatch(submite({id: Date.now(),auth:false,nom,prenom,sex,bday,nationalité,email,telephone,adress,groupesanguin,allergie,maladie,personne,medicament}))
  };
  
  return (
   
      <div id="msform"      >
        <ul id="progressbar">
          <li class="active">Bienvenue dans notre site</li>
          <li>Details personnels</li>
          <li>Historique des maladies</li>
        </ul>

        <fieldset>
          <h2 class="fs-title">Bienvenue dans notre site</h2>
          <h3 class="fs-subtitle">Etape 1</h3>
          <input type="text" name="Nom" placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
          <input type="text" name="prenom" placeholder="Prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}   />
          <select name="sex"  value={sex} onChange={(e)=>setSex(e.target.value)}>
            <option value="0"    >sex</option>
            <option value="male">Femme</option>
            <option value="female">Homme</option>
          </select>
          <form>
            <div>
              <input type="date" id="bday" name="bday" value={bday} onChange={(e)=>setBday(e.target.value)} />
            </div>
          </form>

          <input
            type="button"
            name="next"
            class="next action-button"
            value="Suivant"
          />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Details personnels</h2>
          <h3 class="fs-subtitle">saisissez vos details</h3>
          <input type="text" name="nationalité" placeholder="Nationalité" value={nationalité} onChange={(e)=>setnationalité(e.target.value)} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} />
          <input type="tel" name="tel" placeholder="Telephone"   value={telephone} onChange={(e)=>settelephone(e.target.value)} />
          <input type="text" name="adress"  placeholder="Adress" value={adress} onChange={(e)=>setadress(e.target.value)} />
          <input
            type="button"
            name="previous"
            class="previous action-button"
            value="Precedent"
          />
          <input
            type="button"
            name="next"
            class="next action-button"
            value="suivant"
          />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Historique des maladies</h2>
          <h3 class="fs-subtitle">vos informations sont en sécurité avec nous</h3>
          <input
            type="text"
            name="group sanguin"
            placeholder="Groupe Sanguin"
            value={groupesanguin} onChange={(e)=>setgroupesanguin(e.target.value)}
          />
            <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            value={allergie} onChange={(e)=>setallergie(e.target.value)}
          />
          <select name="maladies"     value={maladie} onChange={(e)=>setmaladie(e.target.value)} >
            <option value="0">Maladies chroniques</option>
            <option value="angine de poitrine">angine de poitrine</option>
            <option value="diabète">diabète</option>
            <option value="hyperthyroïdie">hyperthyroïdie</option>
            <option value="troubles du rythme cardiaque">troubles du rythme cardiaque</option>
            <option value="asthme">asthme</option>
            <option value="autre">autre</option>
          </select>
          <input
            type="text"
            name="Les personnes à contacter en cas d’urgence "
            placeholder="Les personnes à contacter en cas d’urgence Phone"
            value={personne} onChange={(e)=>setpersonne(e.target.value)}
          />
          <textarea
            name="medicament"
            placeholder="Medicament en cours"
            value={medicament} onChange={(e)=>setmedicament(e.target.value)}
          ></textarea>
          <input
            type="button"
            name="previous"
            class="previous action-button"
            value="precedent"
          />
         
          <Link to="/home">
          <input
            type="button"
            name="button"
            class="button action-button"
            value="enregistrer"
            onClick={handlesubmit}
          
          />
        </Link>
        </fieldset>
      </div>
   
  );
}
export default Register
