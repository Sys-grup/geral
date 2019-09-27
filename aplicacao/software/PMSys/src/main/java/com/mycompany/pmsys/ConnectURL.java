/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys;

/**
 *
 * @author Aluno
 */
    import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;


import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ConnectURL {
static String login1 = "";
static String senha1 = "";
    
    public static void main(String[] args) throws SQLException {
        
        
        
         //Create a variable for the connection string.
        String connectionUrl = "jdbc:sqlserver://srvdotsys.database.windows.net:1433;database=bddotsys;user=userdotsys@srvdotsys;password='#Gfgrupo6';encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";

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
        }
        
        
        
        
        
//        String serverName = "srvdotsys";
//        String portNumber = "1433";
//        String databaseName = "bddotsys";
//        String username = "userdotsys";
//        String password = "#Gfgrupo6";
//        String authentication = "";
//        String hostNameInCertificate = "";
//
//        
//            SQLServerDataSource ds = new SQLServerDataSource();
//            ds.setServerName(serverName);
//            ds.setPortNumber(Integer.parseInt(portNumber));
//            ds.setDatabaseName(databaseName);
//            ds.setUser(username);
//            ds.setPassword(password);
//            //ds.setAuthentication(authentication);
//            //ds.setHostNameInCertificate(hostNameInCertificate);
//
//            try (Connection con = ds.getConnection(); Statement stmt = con.createStatement();) {
//                System.out.println();
//                System.out.println("Connection established successfully.");
//
//                // Create and execute an SQL statement that returns user name.
//                String SQL = "SELECT SUSER_SNAME()";
//                try (ResultSet rs = stmt.executeQuery(SQL)) {
//
//                    // Iterate through the data in the result set and display it.
//                    while (rs.next()) {
//                        System.out.println("user name: " + rs.getString(1));
//                    }
//                }
//            } catch (SQLServerException ex) {
//            Logger.getLogger(ConnectURL.class.getName()).log(Level.SEVERE, null, ex);
//        } catch (SQLException ex) {
//            Logger.getLogger(ConnectURL.class.getName()).log(Level.SEVERE, null, ex);
//        }
        
        // Handle any errors that may have occurred.
//        catch (Exception e) {
//            e.printStackTrace();
//        }
//}




    
    
    }
}

