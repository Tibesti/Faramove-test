function PrimaryButton ({action, addClass}) {
    return(
        <button type="submit" className={`py-1.5 rounded-md w-60 bg-primary text-white mb-20 border-2 border-solid border-primary outline-none ${addClass}`}>{action}</button>
    )
}

export default PrimaryButton;