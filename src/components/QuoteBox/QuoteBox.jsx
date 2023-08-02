import './quoteBox.css'
import paper from '../../utils/paper.svg'

const QuoteBox = ({ handleRandomPhrase, quote}) => {

  return (
  <>
    <section className="phrase__container">
      <img className='paper__phrase' src={paper} alt="" />
      <p className='fortune__phrase'>{quote.phrase}</p>
    </section>
    <button className='change__phrase-btn' onClick={handleRandomPhrase}>View other</button>
    <section>
      {quote.author}
    </section>
  </>
  )
}
export default QuoteBox