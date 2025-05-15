import {
    Chip
} from '@mui/material';
import {
    SignalWifi4Bar,
    SignalWifiConnectedNoInternet4,
    SignalWifiOff
} from '@mui/icons-material'

const HeaderComponent = () => {
    return(
        <>
            <Chip icon={<SignalWifi4Bar />} label="Online" color = "primary"/>
            <Chip icon={<SignalWifiConnectedNoInternet4 />} label="Server down" color = "error"/>
            <Chip icon={<SignalWifiOff />} label="Intermediary down" color = "warning"/>
        </>
    );
}

export default HeaderComponent;