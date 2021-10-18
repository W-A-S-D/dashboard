const DashboardHolder = (props) => {
    return (
        <>
            <div style={{ margin: 0, height: '100vh', backgroundColor: '#252525', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                {props.children}
            </div>
        </>
    )
}

export default DashboardHolder;
