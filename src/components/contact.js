import React from 'react';
import { Link as A } from 'theme-ui';

export default function Contact ({ path, children, ...rest }) {

    return (
        <A href={path} {...rest} sx={styles.contactBtn}>
            { children }
        </A>
    )
}

const styles = {
    contactBtn: {
        borderRadius: '45px',
        fontSize: ['14px', null, null, 2],
        letterSpacings: '-0.15px',
        padding: ['12px 20px', null, '15px 30px'],
        fontFamily: 'body',
        cursor: 'pointer',
        lineHeight: 1.2,
        transition: 'all 0.25s',
        fontWeight: 500,
        border: '2px solid',
        borderColor: 'primary',
        color: 'primary',
        bg: 'transparent',
        textDecoration: 'none',
        padding: ['10px 15px', null, '15px 30px'],
        '&:focus': {
            outline: 0,
        },
        '&:hover': {
            color: 'white',
            bg: 'primary',
        },
    }
}