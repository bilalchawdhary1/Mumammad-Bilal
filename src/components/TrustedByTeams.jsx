import { SiWritedotas,SiAppwrite  } from "react-icons/si";
import { AiFillBilibili,AiFillAlipaySquare  } from "react-icons/ai";
const TrustedByTeams = () => {
  return (
    <div className="trusted-team-section">
    <div className="text">
    <h1>Trusted by teams</h1>
    <hr />
    </div>
      <div className="trusted-team-boxs">
        <SiWritedotas className="trusted-team-icon"/>
        <SiAppwrite  className="trusted-team-icon"/>
        <AiFillBilibili  className="trusted-team-icon"/>
        <AiFillAlipaySquare  className="trusted-team-icon"/>
      </div>
    </div>
  )
}

export default TrustedByTeams
