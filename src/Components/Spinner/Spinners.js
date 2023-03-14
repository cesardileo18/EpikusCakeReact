import { Dna } from  'react-loader-spinner'
const Spinners = () => {
    return ( 
        <div>
            {/* <Rings
                height="200"
                width="200"
                color="#fc0da0"
                radius="6"
                wrapperStyle={{}}
                wrapperClass="spinner"
                visible={true}
                ariaLabel="rings-loading"
            /> */}
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
        </div>
    );
}
export default Spinners;