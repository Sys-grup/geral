/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import com.mycompany.pmsys.ConnectURL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;

/**
 *
 * @author Ultim
 */
public class DadosRAM {
    
    //Variaveis de RAM
    private double totalDisponivel;
    private double totalRamUsado;
    private double porcentagemBarra;
    
    private final HardwareAbstractionLayer dados = new SystemInfo().getHardware();
    private final CentralProcessor cpu = dados.getProcessor();
    
    private void usoRAM(){
        GlobalMemory memory;
        
        memory = dados.getMemory();
        
        this.totalDisponivel = memory.getTotal();
        double ramLivre = memory.getAvailable();
        this.totalRamUsado = totalDisponivel - ramLivre;
        
        this.porcentagemBarra = (100d * totalRamUsado) / totalDisponivel;
        
    }
    
    public void insereDadosRam(){
        
                ConnectURL dadosConexao = new ConnectURL();
       JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
       
       try{
       jdbcTemplate.update("INSERT INTO tblInfoRAM values (?, ?, ?)", this.totalRamUsado, this.totalDisponivel, 1000);
       }
       catch (Exception e){
           JOptionPane.showMessageDialog(null, "Erro do Sql \n" + e, "Erro", JOptionPane.ERROR_MESSAGE);
    
       }
        
        
//        Connection conn = ConnectURL.conexao();
//        
//        try{
//            String insertCPU = "INSERT INTO tblInfoRAM values (?, ?, ?)";
//            PreparedStatement stmt = conn.prepareStatement(insertCPU);
//            
//            this.usoRAM();
//            
//            stmt.setDouble(1, this.totalRamUsado);
//            stmt.setDouble(2, this.totalDisponivel);
//            stmt.setInt(3, 1000);
//            
//            stmt.execute();
//            
//            System.out.println("Dados de RAM inseridos com sucesso!");
//        }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
//    }
    }
}
