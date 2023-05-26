import { useState } from 'react';
import Message from './NewsletterMessages';

const NewsletterForm = ( { status, message, onValidated } ) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const TriggerFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Por favor intorduce una direccion de correo valida' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */ 
  const TriggerInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      TriggerFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message;
    if ( "0" !== result?.[0]?.trim() ) {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage;
  }

  return (

    <div>
      <div className="flex newsletter-input-fields grid grid-cols-1 gap-10">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Correo electronico"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border-b border-gray-400 block pl-4 pr-6 py-2 w-96 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={(event) => TriggerInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button flex justify-center">
          <button className="cursor-pointer	text-[#F25151] py-2 px-5 focus:outline-none border-2 border-[#F25151]	" onClick={TriggerFormSubmit}>
            Suscribirse
          </button>
        </div>
      </div>
      <div className="flex justify-center min-h-42px">
        { 'sending' === status ? <Message showSpinner message="Enviando.." contentColorClass="text-black" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-500 font-bold pt-2" dangerouslySetInnerHTML={{ __html: 'Gracias por suscribirte !!' }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm

