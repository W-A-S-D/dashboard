const ProgressBar = (props) => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}>
                <div style={{
                    fontFamily: 'Noto Sans',
                    fontWeight: '400',
                    fontSize: '20px',
                    marginRight: '50px',
                    marginTop: '50px',
                }}>{props.label}</div>

                <div style={{
                    position: 'relative',
                    height: '44px',
                    width: '730px',
                    boxShadow: 'inset 0px 0px 18px rgba(0, 0, 0, 0.25)',
                    borderRadius: '22px 22px 22px 22px',
                    marginRight: '50px',
                    marginTop: '45px',
                }}>
                    <div style={{
                        position: 'absolute',
                        height: '44px',
                        background: 'linear-gradient(90deg, #A29BFE 0%, #7FB8C4 100%)',
                        boxShadow: 'inset 0px 0px 18px rgba(0, 0, 0, 0.25)',
                        borderRadius: '22px 0px 0px 22px',
                        width: props.barValue,
                    }}></div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar