function PrimaryButton ({action, addClass, disabled}) {
    return(
        <button type="submit" disabled={disabled} className={`py-1.5 rounded-md w-60 text-white mb-20 border-2 border-solid outline-none ${addClass} ${disabled?'bg-grey border-grey':'bg-primary border-primary'}`}>{action}</button>
    )
}

export default PrimaryButton;