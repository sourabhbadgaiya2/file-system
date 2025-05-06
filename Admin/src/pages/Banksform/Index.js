import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chola from "assets/images/banks-img/chola.png";
import Adityalogo from "assets/images/banks-img/adtiya.png"; 
import Aulogo from "assets/images/banks-img/Au.png";
import PiramalLogo from "assets/images/banks-img/pirmal.png";
import icilogo from "assets/images/banks-img/ici.png";
import bajalog from "assets/images/banks-img/bajaj.png";
import cholamandalam from "assets/images/banks-img/chola.png";
import sundaramlogo from "assets/images/banks-img/sundaram.png";
import fincrop from "assets/images/banks-img/hero.png";
import idfclogo from "assets/images/banks-img/idfc.png"
import manipuram from "assets/images/banks-img/manipuram.png"
import samstlogo from "assets/images/banks-img/samsata.png"
import profectuslogo from "assets/images/banks-img/proefectus.png"
import Protiumlogo from  "assets/images/banks-img/protium.png"
import agriwsielogo from "assets/images/banks-img/agriwise.png"
import Homefirstlogo from "assets/images/banks-img/homefrist.png"
// import IccBank from "../Banks/IccBank/index";  // Ensure correct import
import PiramalForm from "../BankForms/PiramalForm/index";
import IccBankfroms from '../BankForms/IccForm/index';
import CholaBankFroms from "../BankForms/CholaForms/Index";
import VelocityForm from "../BankForms/VelocityFrom/index";
import SundaramFrom from "../BankForms/SundaramForm/index";
import AdityaForm from 'pages/BankForms/Adtiyaa/index';
import FederalForm from 'pages/BankForms/Federal/Index'
import PiramalNpafrom from 'pages/BankForms/PiramalNpa/Index';
import IciihfcForm from 'pages/BankForms/IcchfcFrom/index'
import IdfcFrom from "pages/BankForms/IdfcFroms/Index"
import manipuramFrom from "pages/BankForms/manipuramFrom/Index"
import SamstaFln from 'pages/BankForms/Samstafln/Index';
import ProfectusFrom from "pages/BankForms/ProfectusFrom/Index"
import Protiumfrom from "pages/BankForms/ProtiumFrom/Index"
import AgriwiseFrom from "pages/BankForms/AgriwiseForm/Index"
import HomefirstFrom from "pages/BankForms/Homefirst/Index"

// import Index from '../Banks/IccBank/index';
// import { components } from 'react-select';

const banks = [
  { id: 0, name: 'Adtiya Bank', logo: Adityalogo , component: AdityaForm },
  { id: 1, name: 'Piramal Bank', logo: PiramalLogo , component: PiramalForm },
  { id: 3, name: 'ICICI Bank', logo: icilogo , component: IccBankfroms },
  { id: 2, name: 'CHOLA',  logo: chola, component: CholaBankFroms }, 
  { id: 9, name: 'ICICI HFC', logo: icilogo , component: IciihfcForm },
  { id: 4, name: 'VelocityForm', logo: fincrop, component: VelocityForm },
  { id: 5, name: 'SundaramFrom', logo: sundaramlogo, component: SundaramFrom },
  { id: 7, name: 'FederalForm', logo: Adityalogo , component: FederalForm },   
  { id: 8, name: 'BAJAJ AMERIYA', logo: bajalog },
  // { id: 9, name: 'BAJAJ', logo: bajalog },
  { id: 10, name: 'Idfc From', logo: idfclogo, component:  IdfcFrom  },
  { id: 11, name: 'PiramalNpa From', logo: PiramalLogo , component: PiramalNpafrom  },
  { id: 12, name: 'Manipuram From', logo: manipuram , component: manipuramFrom  },
  { id: 13, name: 'Samstafln From', logo: samstlogo , component:  SamstaFln },
  { id: 14, name: 'Profectus From', logo: profectuslogo  , component: ProfectusFrom  },
  { id: 15, name: 'Protium From', logo: Protiumlogo , component: Protiumfrom  },
  { id: 16, name: 'Agriwise From', logo: agriwsielogo , component:  AgriwiseFrom   },
  { id: 17, name: 'HomeFirst From', logo: Homefirstlogo , component: HomefirstFrom   },









];

const IccForm = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter banks based on the search term
  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-3">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Bank"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {selectedBank ? (
        <div className="">
          <button className="btn btn-primary ms-5 " onClick={() => setSelectedBank(null)}>Back</button>
          <div className="d-flex justify-content-center">
            <img src={selectedBank.logo} alt="" className="mb-2 mt-3" style={{ width: '120px' }} />
          </div>
          {selectedBank.component ? (
            <selectedBank.component /> // Render the component dynamically
          ) : (
            <p>More details about ...</p>
          )}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
          {filteredBanks.map((bank) => (
            <div key={bank.id} className="col">
              <div 
                className="card text-center p-3 border shadow-lg rounded-3 d-flex flex-column justify-content-between"
                onClick={() => setSelectedBank(bank)}
                style={{ 
                  cursor: 'pointer', 
                  transition: 'transform 0.3s', 
                  background: '#f8f9fa', 
                  height: '150px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="d-flex justify-content-center">
                  <img src={bank.logo} alt={bank.name} className="" style={{ width: '100px' }} />
                </div>
                <h6 className="fw-bold" style={{ color: 'black' }}>{bank.name}</h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IccForm;
