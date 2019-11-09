/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import com.mycompany.pmsys.ConnectURL;
import java.util.Date;
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
    private Date dataHora;
    private int idMaquina;
    
    public DadosRAM(int i){
        this.idMaquina = i;
    }
    
    private final HardwareAbstractionLayer dados = new SystemInfo().getHardware();
    private final CentralProcessor cpu = dados.getProcessor();
    
    private void usoRAM(){
        GlobalMemory memory;
        
        memory = dados.getMemory();
        
        this.totalDisponivel = memory.getTotal();
        double ramLivre = memory.getAvailable();
        this.totalRamUsado = totalDisponivel - ramLivre;
        
        this.porcentagemBarra = (100d * totalRamUsado) / totalDisponivel;
        
        this.dataHora = new Date();
        
    }
    
    public void insereDadosRam(){
        
        usoRAM();
        
        ConnectURL dadosConexao = new ConnectURL();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
       
        try{
            jdbcTemplate.update("INSERT INTO tblInfoRAM values (?, ?, ?, ?)", this.totalRamUsado, this.totalDisponivel, 1001, this.dataHora);
        }
        catch (Exception e){
            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + e, "Erro", JOptionPane.ERROR_MESSAGE);
    
        }
    
    }
}
