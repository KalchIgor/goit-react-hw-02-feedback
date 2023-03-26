import PropTipes from 'prop-types';
import css from './Feedback.module.css';

const Statistics = ({ good, natural, bad, total, positivePercentage }) => (

    <section className={css.statistics}>

        <ui className={css.list}>

            <li className={css.item}> good: {good}</li>
            <li className={css.item}> natural: {natural}</li>
            <li className={css.item}> bad: {bad}</li>
            <li className={css.item}> total: {total}</li>
            <li className={css.item}> positive feedback: {positivePercentage} % </li>
            
        </ui>
        
    </section>);

Statistics.PropTipes = {

    good:    PropTypes.number.isRequired,
    natural: PropTypes.number.isRequired,
    bad:     PropTypes.number.isRequired,
    total:   PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}
        
        

    