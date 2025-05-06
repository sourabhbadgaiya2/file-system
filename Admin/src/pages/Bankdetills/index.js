import React, { useState } from "react"
import { useParams } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Adityalogo from "assets/images/banks-img/adtiya.png"
import Aulogo from "assets/images/banks-img/Au.png"
import PiramalLogo from "assets/images/banks-img/pirmal.png"
import ALLLogo from "assets/images/banks-img/allbank.jpg"
import chola from "assets/images/banks-img/chola.png"
import velocity from "assets/images/banks-img/hero.png"
import fed from "assets/images/banks-img/fed.png"
import idfc from "assets/images/banks-img/idfc.png"
import manupuram from "assets/images/banks-img/manipuram.png"
import samstafln from "assets/images/banks-img/samsata.png"
import Profectuslogo from "assets/images/banks-img/proefectus.png"
import Protiums from "assets/images/banks-img/protium.png"
import Agriwiselogo from "assets/images/banks-img/agriwise.png"
import DmiFinanacelogo from "assets/images/banks-img/dmifinance.png"
import Homefirstlogo from "assets/images/banks-img/homefrist.png"
import ShriRamlogo from "assets/images/banks-img/shriram.png"
import Shubhamlogo from "assets/images/banks-img/shubham.png"
import Sundaramlogo from "assets/images/banks-img/sundaram.png"
import Suryodayalogo from "assets/images/banks-img/suryoday.png"
import Utkarshlogo from "assets/images/banks-img/utkarsh.png"
import icilogo from "assets/images/banks-img/ici.png"
import bajalog from "assets/images/banks-img/bajaj.png"

import Chola from "../Banks/Cholaa/index"

import IccBank from "../Banks/IccBank/index"
import PiramalBank from "../Banks/primal/index"
import Fed from "pages/Banks/Fed/fed"
import PiramalNpa from "pages/Banks/Piramalnpabank/PiramalNpa"
import IdfcBank from "pages/Banks/Idfc/IdfcBank"
import Manupuram from "pages/Banks/Manupuram/Manupurambanks"
import SamstaFln from "pages/Banks/Samsta/SamstaFln"
import ProfectusBank from "pages/Banks/Profectus/ProfectusBank"
import Protiumsbanks from "pages/Banks/Protium/ProtiumBank"
import Agriwise from "pages/Banks/newbanks/Agriwise"
import Bajajameriya from "pages/Banks/newbanks/BajaAmeriya"
import Bajaj from "pages/Banks/newbanks/Bajaj"
import DmiFinanace from "pages/Banks/newbanks/DmiFinance"
import Homefirst from "pages/Banks/newbanks/Homefirst"
import ShriRam from "pages/Banks/newbanks/ShriRam"
import ShubhamHfc from "pages/Banks/newbanks/ShubhamHfc"
import Sundaram from "pages/Banks/newbanks/Sundaram"
import Suryodaya from "pages/Banks/newbanks/Suryodaya"
import Utkarsh from "pages/Banks/newbanks/Utkarsh"
import Velocity from "pages/Banks/Valocity/Index"
import SundaramHome from "pages/Banks/SundaramHome/index"
import Aditya from "pages/Banks/newbanks/Aditya"
import IndraKeela from "pages/Banks/newbanks/IndraKeela"
import HomeTrench from "pages/Banks/newbanks/HomeTrench"
import IccHfc from "pages/Banks/newbanks/IccHfc"

const banks = [
  { id: 0, name: "Aditya Bank", logo: Adityalogo, component: Aditya },
  { id: 1, name: "Piramal Bank", logo: PiramalLogo, component: PiramalBank },
  { id: 2, name: "ICICI Bank", logo: icilogo, component: IccBank },
  { id: 3, name: "Fed Bank", logo: fed, component: Fed },
  { id: 4, name: "PiramalNpa Bank", logo: PiramalLogo, component: PiramalNpa },
  { id: 5, name: "IDFC BANK", logo: idfc, component: IdfcBank },
  { id: 6, name: "Manupuram BANK", logo: manupuram, component: Manupuram },
  { id: 7, name: "SamstaFln", logo: samstafln, component: SamstaFln },
  {
    id: 8,
    name: "Profectus Bank",
    logo: Profectuslogo,
    component: ProfectusBank,
  },
  { id: 9, name: "Protiums Bank", logo: Protiums, component: Protiumsbanks },
  { id: 10, name: "Agriwise Bank", logo: Agriwiselogo, component: Agriwise },
  { id: 11, name: "Bajajameriya Bank", logo: bajalog, component: Bajajameriya },
  { id: 12, name: "Bajaj Bank", logo: bajalog, component: Bajaj },
  {
    id: 13,
    name: "DmiFinanace Bank",
    logo: DmiFinanacelogo,
    component: DmiFinanace,
  },
  { id: 14, name: "Homefirst Bank", logo: Homefirstlogo, component: Homefirst },
  { id: 15, name: "ShriRam Bank", logo: ShriRamlogo, component: ShriRam },
  { id: 16, name: "ShubhamHfc Bank", logo: Shubhamlogo, component: ShubhamHfc },
  { id: 17, name: "Sundaram Bank", logo: Sundaramlogo, component: Sundaram },
  { id: 18, name: "Suryodaya Bank", logo: Suryodayalogo, component: Suryodaya },
  { id: 19, name: "Utkarsh Bank", logo: Utkarshlogo, component: Utkarsh },
  { id: 20, name: "Cholaa", logo: chola, component: Chola },
  { id: 21, name: "Hero Fincrop", logo: velocity, component: Velocity },
  { id: 22, name: "SundaramHome", logo: Sundaramlogo, component: SundaramHome },
  { id: 23, name: "IK Fianace", logo: ALLLogo, component: IndraKeela },
  {
    id: 24,
    name: "Homefirst Trench",
    logo: Homefirstlogo,
    component: HomeTrench,
  },
  { id: 25, name: "ICCHFC BANK", logo: icilogo, component: IccHfc },
]

const BankDetails = () => {
  const [selectedBank, setSelectedBank] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const { id } = useParams()

  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="mt-3">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Banks..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {selectedBank ? (
        <div>
          <button
            className="btn btn-primary ms-5"
            onClick={() => setSelectedBank(null)}
          >
            Back
          </button>
          <div className="d-flex justify-content-center">
            <img
              src={selectedBank.logo}
              alt=""
              className="mb-2"
              style={{ width: "120px" }}
            />
          </div>
          {selectedBank.component ? (
            <selectedBank.component bankId={id} /> // Render the component dynamically
          ) : (
            <p>More details about ...</p>
          )}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
          {filteredBanks.map(bank => (
            <div key={bank.id} className="col">
              <div
                className="card text-center p-3 border shadow-lg rounded-3 d-flex flex-column justify-content-between"
                onClick={() => setSelectedBank(bank)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  background: "#f8f9fa",
                  height: "150px",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    style={{ width: "100px" }}
                  />
                </div>
                <h6 className="fw-bold" style={{ color: "black" }}>
                  {bank.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BankDetails
