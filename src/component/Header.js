import { connect } from "react-redux"


function Header (props) {
  const {currentDifficulty, validate} = props
  return (
    <div className="info-container">
      <div className="difficulty-container">
        <div className="header-difficulty"> Difficulty: </div>
        <div className="current-difficulty">
          {currentDifficulty}
        </div>
      </div>
      <div className="validate-container">
        <div className="validate-header">
          Validate: 
        </div>
        <div className="validate-value">
          {validate}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  currentDifficulty: state.currentDifficulty,
  validate: state.validate
})
export default connect(mapStateToProps)(Header)