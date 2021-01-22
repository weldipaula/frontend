/**
 * arquivo responsavel pela configuração do babel para converter o codigo
 */

 module.exports = {
   presets: [
     '@babel/preset-env',
     '@babel/preset-react'
   ],
   plugins: [
     '@babel/plugin-transform-runtime'
   ]
 }