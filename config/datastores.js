/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * Your app's default datastore.                                            *
  *                                                                          *
  * Sails apps read and write to local disk by default, using a built-in     *
  * database adapter called `sails-disk`.  This feature is purely for        *
  * convenience during development; since `sails-disk` is not designed for   *
  * use in a production environment.                                         *
  *                                                                          *
  * To use a different db _in development_, follow the directions below.     *
  * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
  *                                                                          *
  * (For production configuration, see `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  default: {

    /***************************************************************************
    *                                                                          *
    * Want to use a different database during development?                     *
    *                                                                          *
    * 1. Choose an adapter:                                                    *
    *    https://sailsjs.com/plugins/databases                                 *
    *                                                                          *
    * 2. Install it as a dependency of your Sails app.                         *
    *    (For example:  npm install sails-mysql --save)                        *
    *                                                                          *
    * 3. Then pass it in, along with a connection URL.                         *
    *    (See https://sailsjs.com/config/datastores for help.)                 *
    *                                                                          *
    ***************************************************************************/
    adapter : 'sails-mongo',
    // url : 'mongodb+srv://dhrumilZignuts:dhrumilzignuts@zignuts-technology.zveo5bz.mongodb.net/test'
    url : 'mongodb://dhrumilam:QFGGgsH135RDTwpEMDtI@15.206.7.200:28017/dhrumilam?authSource=admin'
    // protocol://dhrumilam:QFGGgsH135RDTwpEMDtI@15.206.7.200:28017/dhrumilam
    // host : '15.206.7.200',
    // port : 28017 ,
    // user:'dhrumilam',
    // password:'QFGGgsH135RDTwpEMDtI',
    // database : 'dhrumilam'
  },
  // mongodb : {
  //   adapter : 'sails-mongo',
  //   url : 'mongodb://dhrumilam:QFGGgsH135RDTwpEMDtI@15.206.7.200:28017/dhrumilam?authSource=admin&readPreference=primary&directConnection=true&ssl=false'
  //   host : '15.206.7.200',
  //   port : 28017 ,
  //   user:'dhrumilam',
  //   password:'QFGGgsH135RDTwpEMDtI',
  //   database : 'dhrumilam'
  // }


};
