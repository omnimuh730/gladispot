import {
    Chip
} from '@mui/material';
import {
    SignalWifi4Bar,
    SignalWifiConnectedNoInternet4,
    SignalWifiOff
} from '@mui/icons-material'

import { useSocket } from '../core/socket/SocketContext';

const HeaderComponent = () => {
    const { isOnline } = useSocket();
    return(
        <>
            <Chip icon={<SignalWifi4Bar />} label={isOnline ? "Online" : "Offline"} color = {isOnline ? "primary" : "error"} />
        </>
    );
}

export default HeaderComponent;