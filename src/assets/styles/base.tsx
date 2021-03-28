import { makeStyles } from '@material-ui/core/styles';

const useBaseStyles = makeStyles((theme) => ({
    main: {
        maxWidth: 500,
        margin: '100px auto auto auto'
    },

    table: {
        marginTop: 30,
        position: 'relative'
    },

    error: { color: theme.palette.error.dark },

    info: { color: theme.palette.info.dark },

    spinnerWrapper: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    }
}));

export default useBaseStyles;