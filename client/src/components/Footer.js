import '../css/footer.css'
export default function Footer (){
    const styles = {
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
    return ( 
        <div className='container-fluid'>
            <footer>
                <div className="text-center p-4" style={styles}>
                    © 2022 Copyright:
                    <span className="text-reset fw-bold"> JasmineDaniels</span>
                </div>
            </footer>
        </div>
         
    )
}