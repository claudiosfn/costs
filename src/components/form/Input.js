import styles from './Input.module.css'

function Input({ type, text, name, placheholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} placeholder={placheholder} name={name} id={name} handleOnChange={handleOnChange} value={value} />
        </div>    
    )
}

export default Input