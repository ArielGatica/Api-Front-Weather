import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import config from '../config'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="bottom" ref={ref} {...props} />;
});

export default function WeatherInfo() {
    const [open, setOpen] = React.useState(false);
    const xy = ''
    

    function getWeather(){
        axios.post(`${config.API_BACKEND_WEATHER_LOCAL}/weather`, {
            lat: -33.3837200, 
            lng: -70.6773500
        })
        .then((response) =>{
            xy = response.data
        })
        .catch((err) =>{
            console.error(err);
        });
    }

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Get Weather
            </Button>
            <Dialog
                maxWidth={'xs'}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}>

                <DialogTitle>
                    <Icon color="primary">filter_drama</Icon>
                        {" Weather"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText getWeather={getWeather()}>
                        getWeather
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="success">
                       Ok
                    </Button>
                </DialogActions>
                
            </Dialog>
        </div>
    );
}
