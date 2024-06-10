import { useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const initialValues = {
    name: '',
    email: '',
    address: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    address: Yup.string().required('Required')
  });

  const handleSubmit = (values) => {
    console.log('Form data', values, 'Payment Method:', paymentMethod);
    toast.success('Order will be placed!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Dispatch an action or handle order submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>

        <div className="mb-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">{item.name}</span>
                    <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                  </div>
                  <span className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t">
                <strong className="text-xl">Subtotal</strong>
                <strong className="text-xl text-green-600">${totalAmount.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>

        <Formik 
          initialValues={initialValues} 
          validationSchema={validationSchema} 
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium mb-2">Name</label>
                <Field 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 mt-1"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-lg font-medium mb-2">Address</label>
                <Field 
                  as="textarea" 
                  id="address" 
                  name="address" 
                  className="border rounded-md p-2 w-full h-24 resize-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 mt-1"/>
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium mb-2">Payment Method</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <Field 
                      type="radio" 
                      name="paymentMethod" 
                      value="JazzCash" 
                      className="mr-2" 
                      onClick={() => setPaymentMethod('JazzCash')}
                    />
                    JazzCash
                  </label>
                  <label className="flex items-center">
                    <Field 
                      type="radio" 
                      name="paymentMethod" 
                      value="EasyPaisa" 
                      className="mr-2" 
                      onClick={() => setPaymentMethod('EasyPaisa')}
                    />
                    EasyPaisa
                  </label>
                  <label className="flex items-center">
                    <Field 
                      type="radio" 
                      name="paymentMethod" 
                      value="Bank Account" 
                      className="mr-2" 
                      onClick={() => setPaymentMethod('Bank Account')}
                    />
                    Bank Account
                  </label>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition-colors"
              >
                Submit Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
