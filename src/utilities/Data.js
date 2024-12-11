import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Cart functionalities */
const getToCart = () => {
    const storedCartStr = localStorage.getItem('cart-item');
    return storedCartStr ? JSON.parse(storedCartStr) : [];
};

const addToCart = (id) => {
    const storedList = getToCart();

    if (storedList.includes(id)) {
        toast.error('Already in Carts', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return;
    }

    storedList.push(id);
    toast.success('Added in Cart', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    localStorage.setItem('cart-item', JSON.stringify(storedList));
};

const removeToCart = (id) => {
    const cartList = getToCart();

    if (cartList.includes(id)) {
        const updatedCartList = cartList.filter(cartId => cartId !== id);
        localStorage.setItem('cart-item', JSON.stringify(updatedCartList));

        toast.success('Removed from Cart', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error('Item not found in Cart', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};


/* Wishlist functionalities */
const getToWishList = () => {
    const storedWishListStr = localStorage.getItem('list-item');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToWishList = (id) => {
    const storedList = getToWishList();
    const storedCartList = getToCart();

    if (storedCartList.includes(id)) {
        toast.warn('This Product is already in your cart list, so it cannot be added to the Wishlist.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return
    }

    if (storedList.includes(id)) {
        toast.error('Already in Wishlist', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return;
    }

    storedList.push(id);

    toast.success('Added in Wishlist', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    localStorage.setItem('list-item', JSON.stringify(storedList));
};

const removeToWishList = (id) => {
    const removeList = getToWishList();

    if (removeList.includes(id)) {
        const updatedWishList = removeList.filter(listId => listId !== id);
        localStorage.setItem('list-item', JSON.stringify(updatedWishList));

        toast.success('Removed from Wishlist', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error('Item not found in Wishlist', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}


export { addToCart, addToWishList, getToCart, getToWishList, removeToCart, removeToWishList }