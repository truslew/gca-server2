import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'BankAccounts' })
export class BankAccount {
    @PrimaryColumn()
    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    id: string;

    @Column()
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    bankAccount: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    ledgerAccount: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
