import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames'
import './styles.css';

const btnCname = 'btn-list-item';

const BtnList = (props) => {

  return (<ul className='btn-list'>
    {
      props.items.map(item => <li className={cnames(btnCname, {
          [`${btnCname}-active`]: props.value === item.value
        })} key={item.value}>
        <button onClick={() => props.onChange(item.value)} className='btn-list-btn'>{item.label}</button>
      </li>)
    }
  </ul>)

}

export default BtnList;

BtnList.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string.isRequired, value: PropTypes.any.isRequired}))
}
