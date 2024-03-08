import { CircularProgress } from '@chakra-ui/react'
const Loading = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center pt-20">
            {/* <progress ></progress> */}
            <CircularProgress className="" isIndeterminate color='green.300' />
        </div>
    );
};

export default Loading;