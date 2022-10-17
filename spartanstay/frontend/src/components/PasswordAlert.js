import Alert from 'react-bootstrap/Alert';
//import 'bootstrap/dist/css/bootstrap.min.css'

function PasswordAlert({validPass}) {

    if (validPass) {
        return;
    }
    else {
        return (
            <Alert key='danger' variant='danger'>Please enter valid, matching passwords.</Alert>
        );
    }
}

export default PasswordAlert