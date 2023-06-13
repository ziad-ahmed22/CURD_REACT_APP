export default function Header(props) {
    return (
        <div className='bg-dark text-light px-4 py-2 d-flex justify-content-between align-items-center mb-4'>
            <h1>{props.title}</h1>
            {props.btn}
        </div>
    )
}