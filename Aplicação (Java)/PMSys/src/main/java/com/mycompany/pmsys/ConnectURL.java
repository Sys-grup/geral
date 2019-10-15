/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys;

/**
 *
 * @author Alex
 */


import org.apache.commons.dbcp2.BasicDataSource;


public class ConnectURL {
    
    private BasicDataSource dataSource;
    
    public ConnectURL(){
        
        /* Conexão Via Spring JDBC */
        dataSource = new BasicDataSource();
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://srvdotsys.database.windows.net:1433;database=bddotsys");
        
        
        dataSource.setUsername("userdotsys");
        dataSource.setPassword("#Gfgrupo6");
        
    }
    
    public BasicDataSource getDataSource() {
        return dataSource;
    }
}
        
        /* Conexão Via JDBC Puro */
//
//      Connection conexao = null;
//        
//        try{
//            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//            
//            String URL = "jdbc:sqlserver://srvdotsys.database.windows.net:1433;databaseName=bddotsys;user=userdotsys;password=#Gfgrupo6";
//        
//        
//        
//            conexao = DriverManager.getConnection(URL);
//        }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        } catch(ClassNotFoundException e){
//            JOptionPane.showMessageDialog(null, "Classe não encontrada \n" + e, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
//        
//        return conexao;
                
//    }
//    
//    public static boolean FecharConexao(){
//        try{
//            ConnectURL.datSource().close();
//            return true;
//        }catch(SQLException e){
//            return false;
//        }
//    }
        
        
        
        
        
         //Create a variable for the connection string.
        /*String connectionUrl = "jdbc:sqlserver://srvdotsys.database.windows.net:1433;database=bddotsys;user=userdotsys@srvdotsys;password='#Gfgrupo6';encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";

        try (Connection con = DriverManager.getConnection(connectionUrl); Statement stmt = con.createStatement();) {
            //String SQL = "SELECT TOP 10 * FROM AcessoUsuario";
            //ResultSet rs = stmt.executeQuery(SQL);
            //String nome = "SELECT USUARIO FROM AcessoUsuario";
            //String senha = "SELECT SENHA FROM AcessoUsuario";
            
            TelaLogin login = new TelaLogin();
            String SQL = "Select * from AcessoUsuario where usuario = '"+ login.login2+"';";
            ResultSet rs = stmt.executeQuery(SQL);
            
            // Iterate through the data in the result set and display it.
            
                while(rs.next()) {
                     login1 = rs.getString("usuario");
                     senha1 = rs.getString("senha");

        }}
        // Handle any errors that may have occurred.
        catch (SQLException e) {
            e.printStackTrace();
        }*/
        
    
   

